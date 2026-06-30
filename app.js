document.addEventListener("DOMContentLoaded", () => {
    const scanBtn = document.getElementById("scan-btn");
    const scanStatus = document.getElementById("scan-status");
    const scanSection = document.getElementById("scan-section");
    const recordSection = document.getElementById("record-section");
    const directorySection = document.getElementById("directory-section");
    const signupSection = document.getElementById("signup-section");
    
    const navScanner = document.getElementById("nav-scanner");
    const navDirectory = document.getElementById("nav-directory");
    const navSignup = document.getElementById("nav-signup");
    const directoryList = document.getElementById("directory-list");

    // 1. Updated Mock Database with split data
   // 1. Updated Mock Database with 15 Detailed Patient Profiles
    const mockDatabase = [
        { 
            id: "BIO-88492A", name: "David Adebayo", age: 34, bloodType: "O- Negative", genotype: "AA",
            allergies: "Penicillin, Peanuts (Severe)", medications: "Lisinopril 10mg daily", 
            chronicConditions: "Hypertension", emergencyContact: "Sarah Adebayo (08012345678)", consent: "Granted",
            walletStatus: "Active HMO Account", isCritical: true, 
            consultationHistory: "Admitted Feb 2025 for severe allergic reaction.", surgeryHistory: "None",
            labResults: "Lipid panel normal (Jan 2026)", mentalHealth: "No history", reproductiveHealth: "N/A",
            vaccinations: "COVID-19 (2022), Yellow Fever (2024)", doctorNotes: "Patient must carry Epipen at all times."
        },
        { 
            id: "BIO-44109B", name: "Amaka Okafor", age: 26, bloodType: "A Positive", genotype: "AS",
            allergies: "None known", medications: "None", chronicConditions: "None", 
            emergencyContact: "Emeka Okafor (09098765432)", consent: "Granted",
            walletStatus: "Wallet Balance: ₦45,000", isCritical: false, 
            consultationHistory: "Routine checkup at UNILAG Medical Centre (Mar 2026)", surgeryHistory: "Appendectomy (2018)",
            labResults: "HbA1c: 5.1%", mentalHealth: "Mild anxiety, monitoring", reproductiveHealth: "Routine pap smear normal (2025)",
            vaccinations: "Hepatitis B (2023)", doctorNotes: "Healthy young adult. Maintain current lifestyle."
        },
        { 
            id: "BIO-99210C", name: "Samuel Johnson", age: 42, bloodType: "AB Positive", genotype: "SS",
            allergies: "Latex (Mild)", medications: "Hydroxyurea, Folic Acid", chronicConditions: "Sickle Cell Anemia", 
            emergencyContact: "Grace Johnson (07011223344)", consent: "Granted",
            walletStatus: "Insurance Expired", isCritical: true, 
            consultationHistory: "Multiple admissions for vaso-occlusive crisis (LUTH).", surgeryHistory: "Cholecystectomy (2020)",
            labResults: "Hemoglobin 8.2 g/dL (Chronic)", mentalHealth: "History of depression (managed)", reproductiveHealth: "N/A",
            vaccinations: "Pneumococcal (2025)", doctorNotes: "High risk for crisis triggered by stress/cold."
        },
        { 
            id: "BIO-11004D", name: "Zainab Aliyu", age: 22, bloodType: "O Positive", genotype: "AS",
            allergies: "Dust, Pollen", medications: "Salbutamol Inhaler", chronicConditions: "Asthma", 
            emergencyContact: "Fatima Aliyu (08033445566)", consent: "Granted",
            walletStatus: "Active HMO Account", isCritical: true, 
            consultationHistory: "Treated for acute asthma exacerbation (Dec 2025).", surgeryHistory: "None",
            labResults: "Chest X-ray clear", mentalHealth: "No history", reproductiveHealth: "N/A",
            vaccinations: "Flu vaccine (2025)", doctorNotes: "Advised to avoid heavy dust exposure during Harmattan."
        },
        { 
            id: "BIO-55231E", name: "Tunde Bakare", age: 55, bloodType: "B Positive", genotype: "AA",
            allergies: "Sulfa Drugs", medications: "Metformin, Amlodipine", chronicConditions: "Type 2 Diabetes, Hypertension", 
            emergencyContact: "Bose Bakare (08122334455)", consent: "Granted",
            walletStatus: "Wallet Balance: ₦12,500", isCritical: true, 
            consultationHistory: "Regular diabetic clinic follow-ups.", surgeryHistory: "Cataract surgery left eye (2023)",
            labResults: "Fasting Blood Sugar elevated (140 mg/dL)", mentalHealth: "No history", reproductiveHealth: "Prostate screening normal (2025)",
            vaccinations: "COVID-19 Booster (2023)", doctorNotes: "Needs strict dietary adherence. Monitor BP weekly."
        },
        { 
            id: "BIO-77890F", name: "Chioma Eze", age: 30, bloodType: "AB Negative", genotype: "AA",
            allergies: "Shellfish (Severe)", medications: "Prenatal Vitamins", chronicConditions: "Pregnancy (2nd Trimester)", 
            emergencyContact: "Chinedu Eze (09011223344)", consent: "Granted",
            walletStatus: "Active HMO Account", isCritical: false, 
            consultationHistory: "Routine antenatal care.", surgeryHistory: "None",
            labResults: "PCV 35%, Urinalysis normal", mentalHealth: "No history", reproductiveHealth: "Gravida 2, Para 1. Healthy fetus.",
            vaccinations: "Tetanus Toxoid (2026)", doctorNotes: "Uncomplicated pregnancy so far. Continue routine ANC."
        },
        { 
            id: "BIO-22345G", name: "Yusuf Danjuma", age: 38, bloodType: "O Positive", genotype: "AA",
            allergies: "None known", medications: "Carbamazepine", chronicConditions: "Epilepsy", 
            emergencyContact: "Aisha Danjuma (08099887766)", consent: "Granted",
            walletStatus: "Wallet Balance: ₦150,000", isCritical: true, 
            consultationHistory: "Last seizure reported Jan 2026. Neurology review pending.", surgeryHistory: "None",
            labResults: "Electrolytes normal, Liver function normal", mentalHealth: "No history", reproductiveHealth: "N/A",
            vaccinations: "Yellow Fever (2018)", doctorNotes: "Seizures generally well-controlled on current medication."
        },
        { 
            id: "BIO-88901H", name: "Kemi Adeyemi", age: 50, bloodType: "A Negative", genotype: "AA",
            allergies: "Ibuprofen", medications: "Tamoxifen", chronicConditions: "Breast Cancer (Remission)", 
            emergencyContact: "Oluwaseun Adeyemi (07055443322)", consent: "Granted",
            walletStatus: "Insurance Expired", isCritical: false, 
            consultationHistory: "Oncology follow-up clear for 2 years.", surgeryHistory: "Lumpectomy (2022)",
            labResults: "Tumor markers within normal limits", mentalHealth: "Attends support group for cancer survivors", reproductiveHealth: "Post-menopausal",
            vaccinations: "COVID-19 (2021)", doctorNotes: "Continue annual mammograms. Doing well."
        },
        { 
            id: "BIO-33412I", name: "Femi Ojo", age: 19, bloodType: "O Negative", genotype: "SS",
            allergies: "Aspirin", medications: "Proguanil, Folic Acid", chronicConditions: "Sickle Cell Anemia", 
            emergencyContact: "Mrs. Ojo (Mother) - 08066554433", consent: "Granted",
            walletStatus: "Active HMO Account", isCritical: true, 
            consultationHistory: "Frequent emergency visits for bone pain.", surgeryHistory: "None",
            labResults: "PCV constantly around 22%", mentalHealth: "No history", reproductiveHealth: "N/A",
            vaccinations: "Typhoid (2025)", doctorNotes: "Ensure adequate hydration. Susceptible to malaria."
        },
        { 
            id: "BIO-66723J", name: "Blessing Okon", age: 28, bloodType: "B Positive", genotype: "AS",
            allergies: "Dairy (Mild)", medications: "None", chronicConditions: "None", 
            emergencyContact: "Victor Okon (09022334455)", consent: "Granted",
            walletStatus: "Wallet Balance: ₦12,000", isCritical: false, 
            consultationHistory: "Treated for Malaria last month. Fully recovered.", surgeryHistory: "None",
            labResults: "MP slide negative (recent)", mentalHealth: "No history", reproductiveHealth: "Normal cycles",
            vaccinations: "Hepatitis B (2024)", doctorNotes: "Generally healthy. Prescribed antimalarial course completed."
        },
        { 
            id: "BIO-11234K", name: "Emeka Nwosu", age: 45, bloodType: "AB Positive", genotype: "AA",
            allergies: "None known", medications: "Omeprazole", chronicConditions: "Peptic Ulcer Disease", 
            emergencyContact: "Chika Nwosu (08111223344)", consent: "Granted",
            walletStatus: "Insurance Expired", isCritical: false, 
            consultationHistory: "Endoscopy in 2024 showed mild gastritis.", surgeryHistory: "None",
            labResults: "H. pylori negative", mentalHealth: "High stress related to work", reproductiveHealth: "N/A",
            vaccinations: "COVID-19 (2021)", doctorNotes: "Advised to avoid spicy foods and late-night meals."
        },
        { 
            id: "BIO-55678L", name: "Halima Sani", age: 62, bloodType: "O Positive", genotype: "AA",
            allergies: "Codeine", medications: "Diclofenac gel, Calcium supplements", chronicConditions: "Osteoarthritis", 
            emergencyContact: "Ibrahim Sani (08088776655)", consent: "Granted",
            walletStatus: "Active HMO Account", isCritical: false, 
            consultationHistory: "Orthopedic review for knee pain.", surgeryHistory: "Knee replacement right leg (2021)",
            labResults: "Bone density scan shows mild osteopenia", mentalHealth: "No history", reproductiveHealth: "Post-menopausal",
            vaccinations: "Pneumococcal (2023)", doctorNotes: "Recommended physiotherapy twice a week."
        },
        { 
            id: "BIO-99012M", name: "Chinedu Okafor", age: 25, bloodType: "A Positive", genotype: "AA",
            allergies: "None known", medications: "None", chronicConditions: "None", 
            emergencyContact: "Ngozi Okafor (07099887766)", consent: "Granted",
            walletStatus: "Wallet Balance: ₦8,500", isCritical: false, 
            consultationHistory: "Pre-employment medical screening clear.", surgeryHistory: "None",
            labResults: "All parameters normal", mentalHealth: "No history", reproductiveHealth: "N/A",
            vaccinations: "Yellow Fever, Typhoid (2025)", doctorNotes: "Fit for work. Excellent health."
        },
        { 
            id: "BIO-44556N", name: "Aisha Mohammed", age: 31, bloodType: "B Negative", genotype: "AC",
            allergies: "Tetracycline", medications: "Levothyroxine", chronicConditions: "Hypothyroidism", 
            emergencyContact: "Mohammed Ali (08033221100)", consent: "Granted",
            walletStatus: "Active HMO Account", isCritical: false, 
            consultationHistory: "Endocrinology review every 6 months.", surgeryHistory: "Thyroid nodule biopsy (Benign, 2020)",
            labResults: "TSH levels stable on current dose", mentalHealth: "No history", reproductiveHealth: "Routine checkups normal",
            vaccinations: "Hepatitis B (2022)", doctorNotes: "Adhering well to hormone replacement therapy."
        },
        { 
            id: "BIO-77889O", name: "Victor Adeleke", age: 40, bloodType: "O Positive", genotype: "AA",
            allergies: "Morphine (Severe)", medications: "Atorvastatin", chronicConditions: "Hyperlipidemia", 
            emergencyContact: "Mary Adeleke (09055667788)", consent: "Denied",
            walletStatus: "Wallet Balance: ₦250,000", isCritical: false, 
            consultationHistory: "Cardiology consult for elevated cholesterol.", surgeryHistory: "None",
            labResults: "LDL cholesterol trending down", mentalHealth: "No history", reproductiveHealth: "N/A",
            vaccinations: "COVID-19 (2021)", doctorNotes: "Dietary changes showing positive results. Continue statins."
        }
    ];

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
                    <p>ID: ${patient.id} • ${patient.bloodType} • ${patient.age} yrs</p>
                </div>
            `;
            card.addEventListener("click", () => displayPatientRecord(patient));
            directoryList.appendChild(card);
        });
    }
    populateDirectory();

    // REGISTRATION LOGIC
    const btnCaptureBio = document.getElementById("btn-capture-bio");
    const btnSubmitReg = document.getElementById("btn-submit-reg");
    const regForm = document.getElementById("registration-form");
    let isBiometricCaptured = false;

    btnCaptureBio.addEventListener("click", () => {
        btnCaptureBio.textContent = "Scanning...";
        btnCaptureBio.disabled = true;
        setTimeout(() => {
            btnCaptureBio.textContent = "Fingerprint Captured & Hashed ✓";
            btnCaptureBio.classList.remove("btn-secondary");
            btnCaptureBio.classList.add("biometric-success");
            isBiometricCaptured = true;
            btnSubmitReg.disabled = false;
        }, 1500);
    });

    regForm.addEventListener("submit", (e) => {
        e.preventDefault(); 
        if (!isBiometricCaptured) return;

        const newPatient = {
            id: "BIO-" + Math.floor(Math.random() * 90000 + 10000) + "NEW",
            // Emergency Data
            name: document.getElementById("reg-name").value,
            age: document.getElementById("reg-age").value,
            bloodType: document.getElementById("reg-blood").value,
            genotype: document.getElementById("reg-genotype").value,
            allergies: document.getElementById("reg-allergies").value,
            medications: document.getElementById("reg-meds").value,
            chronicConditions: document.getElementById("reg-chronic").value,
            emergencyContact: document.getElementById("reg-contact").value,
            consent: document.getElementById("reg-consent").value,
            walletStatus: document.getElementById("reg-wallet").value,
            isCritical: document.getElementById("reg-chronic").value.toLowerCase() !== "none",
            // Full Record Data
            consultationHistory: document.getElementById("reg-history").value || "No records",
            surgeryHistory: document.getElementById("reg-surgery").value || "No records",
            labResults: document.getElementById("reg-labs").value || "No records",
            mentalHealth: document.getElementById("reg-mental").value || "No records",
            reproductiveHealth: document.getElementById("reg-reproductive").value || "No records",
            vaccinations: document.getElementById("reg-vax").value || "No records",
            doctorNotes: document.getElementById("reg-notes").value || "No records"
        };

        mockDatabase.unshift(newPatient);
        populateDirectory();
        regForm.reset();
        
        isBiometricCaptured = false;
        btnSubmitReg.disabled = true;
        btnCaptureBio.textContent = "🔗 Click to Scan Fingerprint";
        btnCaptureBio.classList.remove("biometric-success");
        btnCaptureBio.classList.add("btn-secondary");
        btnCaptureBio.disabled = false;

        switchView("directory");
        alert("Success! Comprehensive profile saved to database.");
    });

    // SCANNER & RECORD LOGIC
    scanBtn.addEventListener("click", () => {
        scanBtn.disabled = true;
        scanBtn.textContent = "Processing Biometrics...";
        scanBtn.style.opacity = "0.7";
        scanStatus.textContent = "Analyzing fingerprint minutiae... Please wait.";

        setTimeout(() => {
            scanStatus.textContent = "Match found! Decrypting health records...";
            const selectedPatient = mockDatabase[0]; 

            setTimeout(() => {
                displayPatientRecord(selectedPatient);
            }, 800);
        }, 2000);
    });

    function displayPatientRecord(patient) {
        switchView("record");
        
        // Inject Emergency Data
        document.getElementById("patient-name").textContent = patient.name;
        document.getElementById("patient-age").textContent = patient.age;
        document.getElementById("patient-id").textContent = `ID: ${patient.id}`;
        document.getElementById("patient-genotype").textContent = patient.genotype;
        document.getElementById("blood-type").textContent = patient.bloodType;
        document.getElementById("allergies").textContent = patient.allergies;
        document.getElementById("medications").textContent = patient.medications;
        document.getElementById("chronic-conditions").textContent = patient.chronicConditions;
        document.getElementById("emergency-contact").textContent = patient.emergencyContact;
        document.getElementById("emergency-consent").textContent = patient.consent;
        document.getElementById("wallet-status").textContent = patient.walletStatus;
        
        // Inject Full Record Data
        document.getElementById("consultation-history").textContent = patient.consultationHistory;
        document.getElementById("surgery-history").textContent = patient.surgeryHistory;
        document.getElementById("lab-results").textContent = patient.labResults;
        document.getElementById("vaccinations").textContent = patient.vaccinations;
        document.getElementById("mental-health").textContent = patient.mentalHealth;
        document.getElementById("reproductive-health").textContent = patient.reproductiveHealth;
        document.getElementById("doctor-notes").textContent = patient.doctorNotes;

        // Styling logic
        const allergyElement = document.getElementById("allergies");
        const chronicElement = document.getElementById("chronic-conditions");
        if (patient.isCritical || patient.allergies.toLowerCase().includes("severe")) {
            allergyElement.classList.add("highlight-red");
            chronicElement.classList.add("highlight-red");
        } else {
            allergyElement.classList.remove("highlight-red");
            allergyElement.style.color = "var(--text-main)";
            chronicElement.classList.remove("highlight-red");
            chronicElement.style.color = "var(--text-main)";
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
        btn.textContent = "Sending SMS API Request...";
        btn.disabled = true;
        setTimeout(() => {
            btn.textContent = "Next of Kin Notified ✓";
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