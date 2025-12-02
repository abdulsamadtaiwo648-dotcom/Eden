// Initialize Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Request Delivery
function requestDelivery() {
    if (!navigator.geolocation) return alert('Geolocation not supported');
    navigator.geolocation.getCurrentPosition(pos => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        db.collection('deliveries').add({
            customerName: document.getElementById('customerName').value,
            customerAddress: document.getElementById('customerAddress').value,
            businessName: document.getElementById('businessName').value,
            status: 'Pending',
            customerLocation: { lat, lng },
            riderAssigned: null,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            alert('Delivery Requested!');
            loadPersonalDeliveries();
        });
    });
}

// Load personal deliveries with live status
function loadPersonalDeliveries() {
    const list = document.getElementById('personalDeliveries');
    list.innerHTML = '';
    db.collection('deliveries').orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        list.innerHTML = '';
        snapshot.forEach(doc => {
            const data = doc.data();
            const li = document.createElement('li');
            li.className = `list-group-item status-${data.status.replace(/\s/g,'')}`;
            li.innerHTML = `<strong>${data.businessName}</strong>: ${data.status} 
                            <br>Rider: ${data.riderAssigned || 'Not assigned'}`;
            list.appendChild(li);
        });
      });
}

// Initialize
loadPersonalDeliveries();
