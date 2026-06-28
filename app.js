document.addEventListener("DOMContentLoaded", () => {
    // 1. Grab UI Elements
    const scanBtn = document.getElementById("scan-btn");
    const scanStatus = document.getElementById("scan-status");
    
    // Sections
    const scanSection = document.getElementById("scan-section");
    const recordSection = document.getElementById("record-section");
    const directorySection = document.getElementById("directory-section");
    const signupSection = document.getElementById("signup-section");
    
    // Nav Links
    const navScanner = document.getElementById("nav-scanner");
    const navDirectory = document.getElementById("nav-directory");
    const navSignup = document.getElementById("nav-signup");
    const directoryList = document.getElementById("directory-list");

    // 2. The Mock Database (Your fake backend)
    // 2. The Expanded Mock Database (20 Patients for Hackathon Demo)
    const mockDatabase = [
        { 
            id: "BIO-88492A", name: "David Adebayo", bloodType: "O- Negative", 
            allergies: "Penicillin, Peanuts (Severe)", walletStatus: "Active HMO Account", 
            isCritical: true, heartRate: "112", spO2: "94" 
        },
        { 
            id: "BIO-44109B", name: "Amaka Okafor", bloodType: "A Positive", 
            allergies: "None known", walletStatus: "Wallet Balance: ₦45,000", 
            isCritical: false, heartRate: "72", spO2: "99" 
        },
        { 
            id: "BIO-99210C", name: "Samuel Johnson", bloodType: "AB Positive", 
            allergies: "Latex (Mild)", walletStatus: "Insurance Expired", 
            isCritical: false, heartRate: "88", spO2: "97" 
        },
        { 
            id: "BIO-11004D", name: "Zainab Bello", bloodType: "B Negative", 
            allergies: "Aspirin", walletStatus: "Active HMO Account", 
            isCritical: false, heartRate: "78", spO2: "98" 
        },
        { 
            id: "BIO-55231E", name: "Chinedu Eze", bloodType: "O Positive", 
            allergies: "Shellfish, Sulfa Drugs (Severe)", walletStatus: "Wallet Balance: ₦12,500", 
            isCritical: true, heartRate: "135", spO2: "91" 
        },
        { 
            id: "BIO-77890F", name: "Fatima Aliyu", bloodType: "AB Negative", 
            allergies: "None known", walletStatus: "Active HMO Account", 
            isCritical: false, heartRate: "65", spO2: "100" 
        },
        { 
            id: "BIO-22345G", name: "Oluwaseun Peters", bloodType: "A Negative", 
            allergies: "Ibuprofen (Mild)", walletStatus: "Wallet Balance: ₦150,000", 
            isCritical: true, heartRate: "45", spO2: "88" 
        },
        { 
            id: "BIO-88901H", name: "Grace Etim", bloodType: "B Positive", 
            allergies: "Dust Mites", walletStatus: "Insurance Expired", 
            isCritical: false, heartRate: "82", spO2: "96" 
        },
        { 
            id: "BIO-33412I", name: "Michael Ojo", bloodType: "O Positive", 
            allergies: "Bee Stings (Severe)", walletStatus: "Wallet Balance: ₦5,000", 
            isCritical: true, heartRate: "140", spO2: "90" 
        },
        { 
            id: "BIO-66723J", name: "Nneka Nwosu", bloodType: "A Positive", 
            allergies: "None known", walletStatus: "Active HMO Account", 
            isCritical: false, heartRate: "74", spO2: "99" 
        },
        { 
            id: "BIO-11234K", name: "Tunde Bakare", bloodType: "AB Positive", 
            allergies: "Dairy (Mild)", walletStatus: "Wallet Balance: ₦85,000", 
            isCritical: false, heartRate: "80", spO2: "98" 
        },
        { 
            id: "BIO-55678L", name: "Aisha Mohammed", bloodType: "O Negative", 
            allergies: "Tetracycline", walletStatus: "Active HMO Account", 
            isCritical: true, heartRate: "115", spO2: "93" 
        },
        { 
            id: "BIO-99012M", name: "Ibrahim Musa", bloodType: "B Negative", 
            allergies: "None known", walletStatus: "Insurance Expired", 
            isCritical: false, heartRate: "68", spO2: "97" 
        },
        { 
            id: "BIO-44556N", name: "Chioma Chukwu", bloodType: "A Negative", 
            allergies: "Soy, Gluten", walletStatus: "Wallet Balance: ₦220,000", 
            isCritical: false, heartRate: "76", spO2: "99" 
        },
        { 
            id: "BIO-77889O", name: "Yusuf Danjuma", bloodType: "O Positive", 
            allergies: "Morphine (Severe)", walletStatus: "Active HMO Account", 
            isCritical: true, heartRate: "130", spO2: "89" 
        },
        { 
            id: "BIO-22334P", name: "Blessing Okon", bloodType: "AB Negative", 
            allergies: "None known", walletStatus: "Wallet Balance: ₦12,000", 
            isCritical: false, heartRate: "70", spO2: "98" 
        },
        { 
            id: "BIO-66778Q", name: "Emeka Uba", bloodType: "B Positive", 
            allergies: "Tree Nuts (Severe)", walletStatus: "Insurance Expired", 
            isCritical: true, heartRate: "122", spO2: "92" 
        },
        { 
            id: "BIO-11223R", name: "Halima Sani", bloodType: "A Positive", 
            allergies: "Pollen", walletStatus: "Active HMO Account", 
            isCritical: false, heartRate: "75", spO2: "99" 
        },
        { 
            id: "BIO-99887S", name: "Victor Adeleke", bloodType: "O Negative", 
            allergies: "None known", walletStatus: "Wallet Balance: ₦300,000", 
            isCritical: false, heartRate: "62", spO2: "100" 
        },
        { 
            id: "BIO-44555T", name: "Kemi Awolowo", bloodType: "AB Positive", 
            allergies: "Codeine", walletStatus: "Insurance Expired", 
            isCritical: true, heartRate: "108", spO2: "94" 
        }
    ];

    // --- NAVIGATION LOGIC ---
    function switchView(viewName) {
        scanSection.classList.add("hidden");
        recordSection.classList.add("hidden");
        directorySection.classList.add("hidden");
        signupSection.classList.add("hidden");
        
        navScanner.classList.remove("active");
        navDirectory.classList.remove("active");
        navSignup.classList.remove("active");

        if (viewName === "scanner") {
            scanSection.classList.remove("hidden");
            navScanner.classList.add("active");
            scanBtn.disabled = false;
            scanBtn.textContent = "Initiate Manual Scan Override";
            scanBtn.style.opacity = "1";
            scanStatus.textContent = "Scanner connected on USB Port 1";
        } else if (viewName === "directory") {
            directorySection.classList.remove("hidden");
            navDirectory.classList.add("active");
        } else if (viewName === "signup") {
            signupSection.classList.remove("hidden");
            navSignup.classList.add("active");
        } else if (viewName === "record") {
            recordSection.classList.remove("hidden");
        }
    }

    navScanner.addEventListener("click", () => switchView("scanner"));
    navDirectory.addEventListener("click", () => switchView("directory"));
    navSignup.addEventListener("click", () => switchView("signup"));

    // --- DIRECTORY LOGIC ---
    function populateDirectory() {
        directoryList.innerHTML = ""; 
        mockDatabase.forEach(patient => {
            const card = document.createElement("div");
            card.className = "directory-card";
            const initials = patient.name.split(" ").map(n => n[0]).join("");

            card.innerHTML = `
                <div class="dir-avatar">${initials}</div>
                <div class="dir-info">
                    <h4>${patient.name}</h4>
                    <p>ID: ${patient.id} • ${patient.bloodType}</p>
                </div>
            `;
            card.addEventListener("click", () => displayPatientRecord(patient));
            directoryList.appendChild(card);
        });
    }
    populateDirectory();

    // --- REGISTRATION LOGIC ---
    const btnCaptureBio = document.getElementById("btn-capture-bio");
    const btnSubmitReg = document.getElementById("btn-submit-reg");
    const regForm = document.getElementById("registration-form");
    let isBiometricCaptured = false;

    // Fake biometric capture animation
    btnCaptureBio.addEventListener("click", () => {
        btnCaptureBio.textContent = "Scanning...";
        btnCaptureBio.disabled = true;
        
        setTimeout(() => {
            btnCaptureBio.textContent = "Fingerprint Captured & Hashed ✓";
            btnCaptureBio.classList.remove("btn-secondary");
            btnCaptureBio.classList.add("biometric-success");
            isBiometricCaptured = true;
            btnSubmitReg.disabled = false; // Unlock submit button
        }, 1500);
    });

    // Handle form submission
    regForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent page reload
        
        if (!isBiometricCaptured) return;

        // Create new patient object
        const newPatient = {
            id: "BIO-" + Math.floor(Math.random() * 90000 + 10000) + "NEW", // Random ID
            name: document.getElementById("reg-name").value,
            bloodType: document.getElementById("reg-blood").value,
            allergies: document.getElementById("reg-allergies").value,
            walletStatus: document.getElementById("reg-wallet").value,
            isCritical: document.getElementById("reg-critical").checked,
            heartRate: Math.floor(Math.random() * (100 - 60) + 60).toString(), // Random vitals
            spO2: Math.floor(Math.random() * (100 - 92) + 92).toString()
        };

        // Save to our fake database
        mockDatabase.unshift(newPatient); // unshift puts them at the TOP of the array

        // Rebuild the directory so they show up!
        populateDirectory();

        // Reset the form
        regForm.reset();
        isBiometricCaptured = false;
        btnSubmitReg.disabled = true;
        btnCaptureBio.textContent = "🔗 Click to Scan Fingerprint";
        btnCaptureBio.classList.remove("biometric-success");
        btnCaptureBio.classList.add("btn-secondary");
        btnCaptureBio.disabled = false;

        // Take the user straight to the directory to see their new registration
        switchView("directory");
        alert("Success! Patient registered and biometric template saved to database.");
    });


    // --- SCANNER & RECORD LOGIC (Unchanged) ---
    scanBtn.addEventListener("click", () => {
        scanBtn.disabled = true;
        scanBtn.textContent = "Processing Biometrics...";
        scanBtn.style.opacity = "0.7";
        scanStatus.textContent = "Analyzing fingerprint minutiae... Please wait.";

        setTimeout(() => {
            scanStatus.textContent = "Match found! Decrypting health records...";
            // If they just registered someone, show the new person! Otherwise random.
            const selectedPatient = mockDatabase[0]; 

            setTimeout(() => {
                displayPatientRecord(selectedPatient);
            }, 800);
        }, 2000);
    });

    function displayPatientRecord(patient) {
        switchView("record");
        document.getElementById("patient-name").textContent = patient.name;
        document.getElementById("patient-id").textContent = `ID: ${patient.id}`;
        document.getElementById("blood-type").textContent = patient.bloodType;
        document.getElementById("allergies").textContent = patient.allergies;
        document.getElementById("wallet-status").textContent = patient.walletStatus;

        const vitalNums = document.querySelectorAll(".vital-num");
        if (vitalNums.length >= 2) {
            vitalNums[0].textContent = patient.heartRate;
            vitalNums[1].textContent = patient.spO2;
        }

        const allergyElement = document.getElementById("allergies");
        if (patient.isCritical) {
            allergyElement.classList.add("highlight-red");
        } else {
            allergyElement.classList.remove("highlight-red");
            allergyElement.style.color = "var(--text-main)";
        }
        
        const walletElement = document.getElementById("wallet-status").parentElement;
        if (patient.walletStatus.includes("Expired")) {
            walletElement.style.background = "var(--danger-light)";
            walletElement.style.color = "var(--danger)";
            walletElement.querySelector(".dot").style.background = "var(--danger)";
        } else {
            walletElement.style.background = "var(--success)";
            walletElement.style.color = "white";
            walletElement.querySelector(".dot").style.background = "white";
        }
    }

    document.getElementById("notify-btn").addEventListener("click", () => {
        const btn = document.getElementById("notify-btn");
        const originalText = btn.textContent;
        btn.textContent = "Sending...";
        btn.disabled = true;
        setTimeout(() => {
            btn.textContent = "SMS Sent to Next of Kin ✓";
            btn.style.background = "var(--success)";
            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
                btn.style.background = "var(--danger-gradient)";
            }, 3000);
        }, 1500);
    });
    
    document.querySelector(".btn-secondary[onclick='location.reload()']").onclick = (e) => {
        e.preventDefault();
        switchView("scanner");
    };
});