const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const params = new URLSearchParams(window.location.search);
const uid = params.get('uid');

db.collection('users').doc(uid).get().then(doc=>{
    if(!doc.exists) return alert('User not found');
    const userType = doc.data().userType;
    loadDashboard(userType);
});

function loadDashboard(userType){
    const container = document.getElementById('dashboardContainer');
    container.innerHTML = ''; 

    if(userType==='personal'){
        container.innerHTML = `
            <div class="card p-3 bg-light text-dark mb-3">
                <h5>Request Delivery</h5>
                <input id="customerAddress" placeholder="Your Address" class="form-control mb-2"/>
                <input id="businessName" placeholder="Business Name" class="form-control mb-2"/>
                <button class="btn btn-primary w-100" onclick="requestDelivery()">Request Delivery</button>
            </div>
            <div class="card p-3 bg-light text-dark mb-3">
                <h5>Your Deliveries</h5>
                <ul id="deliveriesList"></ul>
            </div>
            <div id="map" style="height:300px; border-radius:15px;"></div>
        `;
        initPersonalDashboard();
    }

    if(userType==='business'){
        container.innerHTML = `
            <div class="card p-3 bg-light text-dark mb-3">
                <h5>All Deliveries</h5>
                <ul id="allDeliveries"></ul>
            </div>
        `;
        initBusinessDashboard();
    }

    if(userType==='rider'){
        container.innerHTML = `
            <div class="card p-3 bg-light text-dark mb-3">
                <h5>Assigned Deliveries</h5>
                <ul id="assignedDeliveries"></ul>
            </div>
            <div id="map" style="height:300px; border-radius:15px;"></div>
        `;
        initRiderDashboard();
    }
}

// Functions initPersonalDashboard, initBusinessDashboard, initRiderDashboard
// will contain Firebase listeners and live map updates similar to the personal-dashboard.js we built
