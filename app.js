// Firebase config
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// Example: use the logged-in user's UID
const userId = "CURRENT_USER_UID"; // Replace with auth.currentUser.uid in real login

let map, customerMarker, riderMarker;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: { lat: 0, lng: 0 }
    });
}

function requestDelivery() {
    if (!navigator.geolocation) return alert('Geolocation not supported');
    navigator.geolocation.getCurrentPosition(pos => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        db.collection('deliveries').add({
            customerId: userId,
            customerAddress: document.getElementById('customerAddress').value,
            businessName: document.getElementById('businessName').value,
            status: 'Pending',
            customerLocation: { lat, lng },
            riderAssigned: null,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            alert('Delivery Requested!');
        });
    });
}

// Load deliveries in real-time
db.collection('deliveries').where("customerId","==",userId)
  .orderBy('createdAt','desc')
  .onSnapshot(snapshot => {
    const list = document.getElementById('deliveriesList');
    list.innerHTML = '';
    snapshot.forEach(doc => {
        const data = doc.data();
        const li = document.createElement('li');
        li.className = `status-${data.status.replace(/\s/g,'')}`;
        li.textContent = `${data.businessName} - ${data.status} - Rider: ${data.riderAssigned || "Not assigned"}`;
        list.appendChild(li);

        // Update map markers
        if(data.customerLocation){
            if(!customerMarker){
                customerMarker = new google.maps.Marker({
                    position: data.customerLocation,
                    map: map,
                    label: 'You'
                });
                map.setCenter(data.customerLocation);
            } else {
                customerMarker.setPosition(data.customerLocation);
            }
        }
        if(data.riderLocation){
            if(!riderMarker){
                riderMarker = new google.maps.Marker({
                    position: data.riderLocation,
                    map: map,
                    label: 'Rider',
                    icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
                });
            } else {
                riderMarker.setPosition(data.riderLocation);
            }
        }
    });
});

window.onload = initMap;
