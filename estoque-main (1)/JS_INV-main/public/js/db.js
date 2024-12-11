// Configuração do Firebase
const firebaseConfig = {
	apiKey: "AIzaSyA1KWkEtAg1hwXZqqZGrI1YQYzKW2Nh_pg",
	authDomain: "lista-31f31.firebaseapp.com",
	databaseURL: "https://lista-31f31-default-rtdb.firebaseio.com",
	projectId: "lista-31f31",
	storageBucket: "lista-31f31.firebasestorage.app",
	messagingSenderId: "422091432299",
	appId: "1:422091432299:web:e87e70912ef4faeedbac2e"
};

// Inicialização do Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();