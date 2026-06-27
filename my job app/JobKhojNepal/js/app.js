
const SAMPLE_JOBS = [
    {
        id: "job_001",
        title: "Senior Full Stack Engineer (Node.js & React)",
        company: "Logpoint Nepal",
        location: "Jawalakhel, Lalitpur",
        salary: "NPR 150,000 - 220,000 / month",
        category: "IT & Software",
        type: "Full Time",
        posted: "2026-06-18",
        description: "Logpoint is seeking an experienced Full Stack Engineer to lead our core internal security analytics dashboard squad.",
        requirements: ["5+ years production experience with Node.js & React", "Deep knowledge of microservice pattern structures", "Strong foundational knowledge of cloud environments (AWS/Azure)"]
    },
    {
        id: "job_002",
        title: "Relationship Manager - Commercial Banking",
        company: "Nabil Bank Limited",
        location: "Teendhara, Kathmandu",
        salary: "NPR 90,000 - 130,000 / month",
        category: "Banking & Finance",
        type: "Full Time",
        posted: "2026-06-20",
        description: "Drive corporate business expansion by maintaining deep credit relationships with mid-to-large corporate enterprises across Nepal.",
        requirements: ["Master's degree in Management/Economics", "Minimum 3 years banking experience in credit units", "Excellent corporate negotiation skills"]
    },
    {
        id: "job_003",
        title: "Secondary Level Mathematics Educator",
        company: "Deerwalk Sifal School",
        location: "Sifal, Kathmandu",
        salary: "NPR 55,000 - 75,000 / month",
        category: "Education",
        type: "Full Time",
        posted: "2026-06-19",
        description: "Deliver highly engaging, practical application-focused mathematics instruction to secondary level classrooms.",
        requirements: ["Master's degree in Mathematics or equivalent", "Familiarity with progressive learning approaches", "Strong classroom management skills"]
    },
    {
        id: "job_004",
        title: "Digital Marketing Specialist",
        company: "Daraz Nepal",
        location: "Naxal, Kathmandu",
        salary: "NPR 60,000 - 90,000 / month",
        category: "Marketing & Sales",
        type: "Full Time",
        posted: "2026-06-21",
        description: "Take ownership of full-funnel digital paid execution across Meta, Google, and programmatic marketing platforms to boost marketplace conversions.",
        requirements: ["Proven experience scaling eCommerce paid advertising acquisition models", "Data analytics fluency (GA4, Looker Studio)", "Creative copywriting skills"]
    },
    {
        id: "job_005",
        title: "Senior Creative Graphic Designer",
        company: "Outlines Research & Development",
        location: "Jhamsikhel, Lalitpur",
        salary: "NPR 50,000 - 80,000 / month",
        category: "Graphic Design",
        type: "Full Time",
        posted: "2026-06-15",
        description: "Translate ambiguous high-level business campaign strategies into impactful, clear visual identity mockups and digital branding assets.",
        requirements: ["Advanced proficiency across Adobe Creative Suite ecosystem", "Strong illustration or vector production speed", "An extensive portfolio of past brand identity design work"]
    },
    {
        id: "job_006",
        title: "Customer Success Representative",
        company: "Pathao Nepal",
        location: "Mid-Baneshwor, Kathmandu",
        salary: "NPR 25,000 - 38,000 / month",
        category: "Customer Service",
        type: "Shift Work",
        posted: "2026-06-22",
        description: "Provide exceptional real-time problem-solving and support to our drivers and customers via phone, email, and live chat platforms.",
        requirements: ["Native verbal/written articulation skills in Nepali and English", "Empathy-driven customer problem-solving demeanor", "Ability to thrive under pressure in high-stress ticket situations"]
    },
    {
        id: "job_007",
        title: "Mobile App Developer (Flutter)",
        company: "F1Soft International",
        location: "Pulchowk, Lalitpur",
        salary: "NPR 100,000 - 160,000 / month",
        category: "IT & Software",
        type: "Full Time",
        posted: "2026-06-14",
        description: "Architect and scale high-availability Fintech applications used by millions across Nepal.",
        requirements: ["2+ years dedicated commercial Flutter framework deployments", "Experience integrating secure RESTful APIs", "Knowledge of local payment gateway integrations"]
    },
    {
        id: "job_008",
        title: "Branch Manager",
        company: "Global IME Bank",
        location: "Prithvi Chowk, Pokhara",
        salary: "NPR 110,000 - 150,000 / month",
        category: "Banking & Finance",
        type: "Full Time",
        posted: "2026-06-17",
        description: "Oversee entire branch operations, financial health targets, localized corporate credit assessments, and regulatory compliance rules.",
        requirements: ["Bachelor's degree minimum (Master's preferred)", "5+ years retail banking track record", "Strong local business connections in the Gandaki province"]
    },
    {
        id: "job_009",
        title: "Content Writer & Strategist",
        company: "Kayo Creative Studio",
        location: "Kupondole, Lalitpur",
        salary: "NPR 40,000 - 60,000 / month",
        category: "Marketing & Sales",
        type: "Full Time",
        posted: "2026-06-16",
        description: "Draft comprehensive SEO long-form educational blogs, scripts for viral video campaigns, and high-converting marketing copy.",
        requirements: ["Flawless written English communication skills", "Demonstrated basic knowledge of local Search Engine Optimization (SEO) strategies", "Creative approach to storytelling"]
    },
    {
        id: "job_010",
        title: "A-Level Physics Faculty Member",
        company: "British College",
        location: "Thapathali, Kathmandu",
        salary: "NPR 80,000 - 120,000 / month",
        category: "Education",
        type: "Part Time / Full Time",
        posted: "2026-06-12",
        description: "Instruct Cambridge Assessment International Education A-Level Physics syllabus targets using modern classroom lab experiments.",
        requirements: ["Master's Degree in Physics", "Previous experience handling international A-Level syllabi benchmarks", "Strong interpersonal communication skills"]
    }
];

// initialize states inside internal memory
let jobs = JSON.parse(localStorage.getItem('jk_jobs')) || [];
let users = JSON.parse(localStorage.getItem('jk_users')) || [];
let currentUser = JSON.parse(localStorage.getItem('jk_currentUser')) || null;
let appliedJobs = JSON.parse(localStorage.getItem('jk_appliedJobs')) || [];
let savedJobs = JSON.parse(localStorage.getItem('jk_savedJobs')) || [];

if (jobs.length === 0) {
    localStorage.setItem('jk_jobs', JSON.stringify(SAMPLE_JOBS));
    jobs = SAMPLE_JOBS;
}

// ==========================================
// 2. STATE MANAGER LIFECYCLE ROUTER
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    setupNavigation();
    
    // Evaluate active routing target view context 
    if (document.getElementById('jobsGrid')) initHomepage();
    if (document.getElementById('loginForm')) initLoginForm();
    if (document.getElementById('registerForm')) initRegisterForm();
    if (document.getElementById('jobDetailsContainer')) initJobDetailsPage();
    if (document.getElementById('profileForm')) initProfilePage();
});

// ==========================================
// 3. UI GLOBAL LAYER & THEMING
// ==========================================
function initTheme() {
    const savedTheme = localStorage.getItem('jk_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeButtonIcon(savedTheme);

    const toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('jk_theme', newTheme);
            updateThemeButtonIcon(newTheme);
        });
    }
}

function updateThemeButtonIcon(theme) {
    const toggleBtn = document.getElementById('themeToggle');
    if (!toggleBtn) return;
    toggleBtn.innerHTML = theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
}

function setupNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navProfile = document.getElementById('navProfile');
    const navLogin = document.getElementById('navLogin');
    const logoutBtn = document.getElementById('logoutBtn');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => navMenu.classList.toggle('active'));
    }

    if (currentUser) {
        if (navProfile) navProfile.style.display = 'block';
        if (navLogin) navLogin.style.display = 'none';
    } else {
        if (navProfile) navProfile.style.display = 'none';
        if (navLogin) navLogin.style.display = 'block';
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('jk_currentUser');
            window.location.href = 'index.html';
        });
    }
}

// ==========================================
// 4. HOMEPAGE SYSTEM CONTROLLER
// ==========================================
let activeCategory = "All";

function initHomepage() {
    renderCategoryFilters();
    renderDashboardStats();
    renderJobListings(jobs);

    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', handleSearchAndFilter);
    }
    
    // Allow searching on pressing 'Enter'
    ['searchKeyword', 'searchLocation'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('keyup', (e) => { if (e.key === 'Enter') handleSearchAndFilter(); });
    });
}

function renderDashboardStats() {
    const dashboard = document.getElementById('dashboardStats');
    if (!dashboard) return;

    if (currentUser) {
        dashboard.style.display = 'grid';
        document.getElementById('statTotalJobs').textContent = jobs.length;
        
        const userApplications = appliedJobs.filter(app => app.userEmail === currentUser.email);
        const userSaves = savedJobs.filter(save => save.userEmail === currentUser.email);
        
        document.getElementById('statApplied').textContent = userApplications.length;
        document.getElementById('statSaved').textContent = userSaves.length;
    } else {
        dashboard.style.display = 'none';
    }
}

function renderCategoryFilters() {
    const container = document.getElementById('categoryContainer');
    if (!container) return;

    const uniqueCategories = ["All", ...new Set(jobs.map(j => j.category))];
    container.innerHTML = uniqueCategories.map(cat => `
        <span class="tag ${cat === activeCategory ? 'active' : ''}" onclick="filterByCategory('${cat}')">${cat}</span>
    `).join('');
}

window.filterByCategory = function(category) {
    activeCategory = category;
    renderCategoryFilters();
    handleSearchAndFilter();
};

function handleSearchAndFilter() {
    const keyword = document.getElementById('searchKeyword').value.toLowerCase().trim();
    const location = document.getElementById('searchLocation').value.toLowerCase().trim();

    const filtered = jobs.filter(job => {
        const matchCategory = activeCategory === "All" || job.category === activeCategory;
        const matchKeyword = !keyword || 
            job.title.toLowerCase().includes(keyword) || 
            job.company.toLowerCase().includes(keyword) || 
            job.description.toLowerCase().includes(keyword);
        const matchLocation = !location || job.location.toLowerCase().includes(location);

        return matchCategory && matchKeyword && matchLocation;
    });

    renderJobListings(filtered);
}

function renderJobListings(listings) {
    const grid = document.getElementById('jobsGrid');
    const countLabel = document.getElementById('jobCount');
    if (!grid) return;

    countLabel.textContent = `Showing ${listings.length} job opportunity${listings.length === 1 ? '' : 's'}`;

    if (listings.length === 0) {
        grid.innerHTML = `<div class="loading-state">No matching positions found. Broaden your keywords.</div>`;
        return;
    }

    grid.innerHTML = listings.map(job => {
        const isSaved = currentUser && savedJobs.some(s => s.jobId === job.id && s.userEmail === currentUser.email);
        const isApplied = currentUser && appliedJobs.some(a => a.jobId === job.id && a.userEmail === currentUser.email);
        
        return `
            <div class="job-card">
                <button class="save-btn ${isSaved ? 'saved' : ''}" onclick="toggleSaveJob('${job.id}')" title="Save Job">
                    <i class="fa-solid fa-bookmark"></i>
                </button>
                <div class="company">${job.company}</div>
                <h3>${job.title}</h3>
                
                <div class="job-details-meta">
                    <span><i class="fa-solid fa-location-dot"></i> ${job.location}</span>
                    <span><i class="fa-solid fa-money-bill-wave"></i> ${job.salary}</span>
                    <span><i class="fa-solid fa-briefcase"></i> ${job.type}</span>
                </div>

                <div class="job-card-actions">
                    <a href="job-details.html?id=${job.id}" class="btn btn-secondary">Details</a>
                    <button class="btn btn-primary" onclick="directApply('${job.id}')" ${isApplied ? 'disabled' : ''}>
                        ${isApplied ? '<i class="fa-solid fa-check"></i> Applied' : 'Apply Now'}
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// ==========================================
// 5. JOB OPERATIONS INTERACTION LAYER
// ==========================================
window.toggleSaveJob = function(jobId) {
    if (!currentUser) {
        alert("Please log in to save job openings.");
        window.location.href = "login.html";
        return;
    }

    const index = savedJobs.findIndex(s => s.jobId === jobId && s.userEmail === currentUser.email);
    if (index > -1) {
        savedJobs.splice(index, 1);
    } else {
        savedJobs.push({ jobId, userEmail: currentUser.email, savedAt: new Date().toISOString().split('T')[0] });
    }

    localStorage.setItem('jk_savedJobs', JSON.stringify(savedJobs));
    renderDashboardStats();
    handleSearchAndFilter();
};

window.directApply = function(jobId) {
    if (!currentUser) {
        alert("Authentication required. Please log in to complete your application.");
        window.location.href = "login.html";
        return;
    }

    const alreadyApplied = appliedJobs.some(a => a.jobId === jobId && a.userEmail === currentUser.email);
    if (alreadyApplied) return;

    appliedJobs.push({
        jobId,
        userEmail: currentUser.email,
        appliedDate: new Date().toISOString().split('T')[0],
        status: "Applied"
    });

    localStorage.setItem('jk_appliedJobs', JSON.stringify(appliedJobs));
    alert("Application successfully transmitted to hiring tracking matrix!");
    renderDashboardStats();
    handleSearchAndFilter();
};

// ==========================================
// 6. DETAILED SPECIFICATION ROUTER VIEW
// ==========================================
function initJobDetailsPage() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const job = jobs.find(j => j.id === id);
    const container = document.getElementById('jobDetailsContainer');

    if (!container) return;

    if (!job) {
        container.innerHTML = `<div class="loading-state">Job listing not found. <a href="index.html">Return home</a></div>`;
        return;
    }

    const isApplied = currentUser && appliedJobs.some(a => a.jobId === job.id && a.userEmail === currentUser.email);

    container.innerHTML = `
        <div class="details-main">
            <div class="details-header">
                <span class="company">${job.company}</span>
                <h1>${job.title}</h1>
                <div class="details-meta-inline">
                    <span><i class="fa-solid fa-location-dot"></i> ${job.location}</span>
                    <span><i class="fa-solid fa-layer-group"></i> ${job.category}</span>
                    <span><i class="fa-solid fa-clock"></i> Posted on ${job.posted}</span>
                </div>
            </div>
            <hr style="border: 0; border-top: 1px solid var(--border-color); margin: 20px 0;">
            <div class="details-body">
                <h3>Job Description</h3>
                <p style="line-height: 1.6; color: var(--text-muted);">${job.description}</p>
                
                <h3>Key Requirements</h3>
                <ul>
                    ${job.requirements.map(req => `<li style="color: var(--text-muted);">${req}</li>`).join('')}
                </ul>
            </div>
        </div>

        <div class="details-sidebar">
            <div class="sidebar-block">
                <h4>Offered Salary</h4>
                <p style="color: var(--primary-color); font-size:1.3rem;">${job.salary}</p>
            </div>
            <div class="sidebar-block">
                <h4>Employment Setup</h4>
                <p>${job.type}</p>
            </div>
            <button class="btn btn-primary btn-block" style="padding:15px;" onclick="directApply('${job.id}')" ${isApplied ? 'disabled' : ''}>
                ${isApplied ? '<i class="fa-solid fa-check"></i> Already Applied' : 'Submit Application Now'}
            </button>
            <button class="btn btn-secondary btn-block" style="margin-top: 12px;" onclick="window.history.back()">
                <i class="fa-solid fa-arrow-left"></i> Go Back
            </button>
        </div>
    `;
}

// ==========================================
// 7. USER ACCESS MANAGEMENT REGISTRATION (VALIDATION Engine)
// ==========================================
function initLoginForm() {
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value.trim();
        const pass = document.getElementById('loginPassword').value;
        
        let valid = true;
        
        // Reset warnings
        document.getElementById('emailError').textContent = "";
        document.getElementById('passwordError').textContent = "";

        if (!email) {
            document.getElementById('emailError').textContent = "Email field cannot be blank.";
            valid = false;
        }
        if (!pass) {
            document.getElementById('passwordError').textContent = "Password field required.";
            valid = false;
        }

        if (!valid) return;

        const matchedUser = users.find(u => u.email === email && u.password === pass);
        if (matchedUser) {
            localStorage.setItem('jk_currentUser', JSON.stringify(matchedUser));
            window.location.href = 'index.html';
        } else {
            document.getElementById('emailError').textContent = "Invalid credential combinations.";
        }
    });
}

function initRegisterForm() {
    document.getElementById('registerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('regName').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const phone = document.getElementById('regPhone').value.trim();
        const pass = document.getElementById('regPassword').value;
        const confirmPass = document.getElementById('regConfirmPassword').value;

        let valid = true;

        // Reset errors
        ['nameError', 'regEmailError', 'phoneError', 'regPasswordError', 'confirmPasswordError'].forEach(id => {
            document.getElementById(id).textContent = "";
        });

        if (!name) { document.getElementById('nameError').textContent = "Full name required."; valid = false; }
        
        if (!email) { 
            document.getElementById('regEmailError').textContent = "Email required."; valid = false; 
        } else if (users.some(u => u.email === email)) {
            document.getElementById('regEmailError').textContent = "This email is already registered."; valid = false;
        }
        
        if (!phone) { 
            document.getElementById('phoneError').textContent = "Phone standard sequence required."; valid = false; 
        } else if (!/^9[78]\d{8}$/.test(phone)) {
            document.getElementById('phoneError').textContent = "Enter a valid 10-digit Nepali mobile number (starting with 97 or 98)."; valid = false;
        }

        if (pass.length < 6) { document.getElementById('regPasswordError').textContent = "Password must span 6+ characters."; valid = false; }
        if (pass !== confirmPass) { document.getElementById('confirmPasswordError').textContent = "Passwords do not match."; valid = false; }

        if (!valid) return;

        users.push({ name, email, phone, password: pass });
        localStorage.setItem('jk_users', JSON.stringify(users));
        
        alert("Registration complete! Welcome aboard.");
        window.location.href = 'login.html';
    });
}

// ==========================================
// 8. PROFILE OPERATIONS & INTERACTION MANAGEMENT
// ==========================================
function initProfilePage() {
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }

    // Populate data profile card
    document.getElementById('profName').value = currentUser.name;
    document.getElementById('profEmail').value = currentUser.email;
    document.getElementById('profPhone').value = currentUser.phone;

    renderProfileLists();

    const editBtn = document.getElementById('editProfileBtn');
    const saveBtn = document.getElementById('saveProfileBtn');
    const profileForm = document.getElementById('profileForm');

    editBtn.addEventListener('click', () => {
        document.getElementById('profName').disabled = false;
        document.getElementById('profPhone').disabled = false;
        editBtn.style.display = 'none';
        saveBtn.style.display = 'inline-flex';
    });

    profileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const updatedName = document.getElementById('profName').value.trim();
        const updatedPhone = document.getElementById('profPhone').value.trim();

        if (!/^9[78]\d{8}$/.test(updatedPhone)) {
             alert("Enter a valid 10-digit Nepali mobile number (starting with 97 or 98).");
             return;
        }

        // Update target index across collections
        currentUser.name = updatedName;
        currentUser.phone = updatedPhone;
        
        const uIndex = users.findIndex(u => u.email === currentUser.email);
        if (uIndex > -1) users[uIndex] = currentUser;

        localStorage.setItem('jk_currentUser', JSON.stringify(currentUser));
        localStorage.setItem('jk_users', JSON.stringify(users));

        document.getElementById('profName').disabled = true;
        document.getElementById('profPhone').disabled = true;
        saveBtn.style.display = 'none';
        editBtn.style.display = 'inline-flex';
        
        alert("Profile modifications saved successfully.");
        setupNavigation();
    });
}

function renderProfileLists() {
    const appliedList = document.getElementById('appliedJobsList');
    const savedGrid = document.getElementById('savedJobsGrid');

    // Applied jobs filtering
    const userApps = appliedJobs.filter(a => a.userEmail === currentUser.email);
    if (userApps.length === 0) {
        appliedList.innerHTML = `<tr><td colspan="4" class="no-data">You haven't applied to any jobs yet.</td></tr>`;
    } else {
        appliedList.innerHTML = userApps.map(app => {
            const matchedJob = jobs.find(j => j.id === app.jobId) || { title: "Position Closed", company: "N/A" };
            return `
                <tr>
                    <td>
                        <strong>${matchedJob.title}</strong><br>
                        <small style="color:var(--text-muted);">${matchedJob.company}</small>
                    </td>
                    <td>${app.appliedDate}</td>
                    <td><span class="status-badge applied">${app.status}</span></td>
                    <td>
                        <button class="btn-danger-link" onclick="retractApplication('${app.jobId}')">Withraw</button>
                    </td>
                </tr>
            `;
        }).join('');
    }

    // Saved jobs filtering
    const userSaves = savedJobs.filter(s => s.userEmail === currentUser.email);
    if (userSaves.length === 0) {
        savedGrid.innerHTML = `<div class="no-data" style="grid-column: 1/-1;">No saved vacancies.</div>`;
    } else {
        savedGrid.innerHTML = userSaves.map(save => {
            const matchedJob = jobs.find(j => j.id === save.jobId);
            if (!matchedJob) return '';
            return `
                <div class="job-card">
                    <div class="company">${matchedJob.company}</div>
                    <h3>${matchedJob.title}</h3>
                    <div class="job-details-meta" style="margin-bottom:12px;">
                        <span><i class="fa-solid fa-location-dot"></i> ${matchedJob.location}</span>
                    </div>
                    <div class="job-card-actions">
                        <a href="job-details.html?id=${matchedJob.id}" class="btn btn-secondary">View</a>
                        <button class="btn-danger-link" onclick="toggleSaveJob('${matchedJob.id}'); renderProfileLists();">Remove</button>
                    </div>
                </div>
            `;
        }).join('');
    }
}

window.retractApplication = function(jobId) {
    if (!confirm("Are you sure you want to withdraw this application?")) return;
    
    appliedJobs = appliedJobs.filter(a => !(a.jobId === jobId && a.userEmail === currentUser.email));
    localStorage.setItem('jk_appliedJobs', JSON.stringify(appliedJobs));
    renderProfileLists();
};