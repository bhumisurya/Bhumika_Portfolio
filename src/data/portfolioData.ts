import { Project, SkillGroup, EducationItem, CertificationItem } from '../types';

export const personalInfo = {
  name: "Bhumika Devendra Suryawanshi",
  headline: "AI/ML Engineer | Machine Learning | Computer Vision | Generative AI",
  location: "Nashik, Maharashtra, India",
  email: "bhumikasuryawanshi61@gmail.com",
  phone: "+91-8766539120",
  linkedin: "https://www.linkedin.com/in/bhumii8006942a5/",
  github: "https://github.com/bhumisurya",
  availability: "Open to suitable AI/ML opportunities",
  bioIntro: "I am an AI/ML Engineer with a Computer Science background and a completed Post Graduate Certificate Programme in Artificial Intelligence from C-DAC Mumbai. I have hands-on project experience in Machine Learning, Deep Learning, Computer Vision, NLP, Generative AI, and AI application development. I enjoy building practical AI solutions and exploring ways to make intelligent systems useful, reliable, and responsible.",
  summaryShort: "Passionate about creating intelligent systems that solve real-world problems through rigorous engineering, computer vision pipelines, and modern Generative AI architectures.",
  photoPath: "/images/profile.jpg",
  resumePath: "/resume.pdf",
};

export const projectsData: Project[] = [
  {
    id: "cognitive-load-ai",
    title: "Towards Responsible AI: Quantifying Cognitive Load in Human-AI Collaboration",
    shortDescription: "Multimodal AI system for real-time cognitive-load classification using Computer Vision, eye tracking, mouse dynamics, and facial emotion analysis.",
    fullOverview: "Developed a comprehensive multimodal AI research and engineering system designed to assess and quantify learner cognitive load during human-AI interactions. The platform ingests ocular tracking cues, mouse kinematics, and facial expressions, extracting behavioral features to classify user cognitive state into Low, Medium, and High load tiers to power adaptive scaffolding.",
    category: "Multimodal AI & Computer Vision",
    technologies: [
      "Python",
      "TensorFlow",
      "OpenCV",
      "MediaPipe",
      "LibreFace",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Flask"
    ],
    problemStatement: "During complex human-AI tasks and digital learning environments, users often experience cognitive overload or under-engagement without direct feedback to the system, causing suboptimal learning outcomes and task fatigue.",
    solutionOverview: "Engineered an unobtrusive multimodal sensing pipeline combining webcam-based facial landmarking and ocular metrics with cursor kinematics to compute continuous behavioral features. These vectors feed a machine learning classification engine classifying cognitive load into Low, Medium, and High states with explainable confidence indicators.",
    keyImplementations: [
      "Real-time video frame capture and ocular landmark extraction via OpenCV and MediaPipe",
      "Affective emotion cues and facial action units (AUs) processing with LibreFace",
      "Mouse trajectory kinematics, velocity profiles, and hesitation jitter feature extraction",
      "Time-window aggregation and multimodal feature vector normalization using Pandas & NumPy",
      "Multiclass machine learning & neural network classification into Low, Medium, and High cognitive levels",
      "Responsible AI framework ensuring learner privacy with local processing and explainable outputs"
    ],
    myContributions: [
      "Designed the end-to-end multimodal feature engineering pipeline from raw sensor feeds",
      "Implemented facial landmark and emotion cue detection modules using MediaPipe and LibreFace",
      "Trained and evaluated multi-class classifiers to discern discrete cognitive load levels",
      "Integrated modular Flask API to serve real-time predictions for downstream adaptive interfaces"
    ],
    verifiedResults: "Successfully established a reliable multimodal behavioral feature pipeline and achieved robust 3-tier classification (Low, Medium, High) with consistent feature importance attribution.",
    futureImprovements: [
      "Benchmarking across larger, ethnically diverse participant cohorts in varied ambient lighting (Proposed)",
      "Edge-optimized deployment using ONNX Runtime for ultra-low latency inference on local devices (Proposed)",
      "Integration with live adaptive tutoring systems to dynamically adjust pedagogical pace based on real-time load (Proposed)"
    ],
    githubUrl: "https://github.com/bhumisurya/Towards-Responsible-AI-Quantifying-Cognitive-Load-in-Human-AI-Collaboration-Bhumi",
    architectureDiagram: {
      type: "cognitive",
      steps: [
        {
          title: "1. Multimodal Signal Capture",
          description: "Webcam video frames (eye gaze, blinks, facial expressions) + mouse kinematic trajectories",
          icon: "Camera",
          tags: ["Webcam Video", "Mouse Stream", "Timestamp Sync"]
        },
        {
          title: "2. Behavioral Feature Extraction",
          description: "MediaPipe facial mesh + LibreFace emotion indicators + cursor velocity & hesitation metrics",
          icon: "Cpu",
          tags: ["MediaPipe", "LibreFace", "Kinematic Vectors"]
        },
        {
          title: "3. Feature Normalization & Fusion",
          description: "Sliding window temporal aggregation, z-score normalization, and feature vector concatenation",
          icon: "GitMerge",
          tags: ["Pandas", "NumPy", "Time Windows"]
        },
        {
          title: "4. ML/DL Classification Engine",
          description: "Evaluated classifiers categorizing behavioral signatures into 3 cognitive load states",
          icon: "Brain",
          tags: ["TensorFlow", "Scikit-Learn", "Softmax Probabilities"]
        },
        {
          title: "5. Responsible AI Output",
          description: "Discrete load state: Low, Medium, High with confidence metrics for adaptive interfaces",
          icon: "CheckCircle2",
          tags: ["Low Load", "Medium Load", "High Load"]
        }
      ]
    }
  },
  {
    id: "abnormal-activity-ai",
    title: "Abnormal Activity Detection Using AI",
    shortDescription: "Real-time Computer Vision system for human activity recognition and abnormal posture detection with multithreaded voice & email alerts.",
    fullOverview: "Built a robust real-time Computer Vision surveillance and safety monitoring system capable of identifying abnormal human postures and distress events from live camera feeds. Utilizing MediaPipe Pose for 33-point skeletal tracking and KNN classification, the system executes rapid inference and dispatches real-time automated voice and email notifications via multithreaded Flask and Firebase services.",
    category: "Computer Vision & Edge Surveillance",
    technologies: [
      "Python",
      "OpenCV",
      "MediaPipe Pose",
      "Scikit-learn",
      "K-Nearest Neighbors (KNN)",
      "Flask",
      "Firebase",
      "NumPy",
      "Pandas",
      "Multithreading",
      "Text-to-Speech"
    ],
    problemStatement: "Conventional surveillance requires manual continuous human oversight, often leading to missed emergency incidents such as falls, sudden collapses, or unauthorized restricted postures in monitored environments.",
    solutionOverview: "Developed an automated intelligent vision pipeline that tracks skeletal joint landmarks in real time, computes angular spatial vectors, and classifies postures against abnormal activity profiles using KNN. An asynchronous multithreaded backend logs events to Firebase and triggers immediate text-to-speech acoustic alarms and email dispatches.",
    keyImplementations: [
      "Real-time video frame ingestion and preprocessing using OpenCV camera pipelines",
      "33-point 3D skeletal landmark extraction using Google MediaPipe Pose",
      "Geometric angle and distance feature calculation across key joint vectors (spine, knees, hips, shoulders)",
      "Trained K-Nearest Neighbors (KNN) classifier for fast, deterministic posture categorization",
      "Multithreaded background dispatch preventing video stream frame drops during alert triggers",
      "Firebase real-time database logging alongside automated TTS voice alerts and email dispatches"
    ],
    myContributions: [
      "Implemented the MediaPipe Pose tracking and geometric landmark extraction module",
      "Curated posture dataset, engineered joint angle feature representations, and trained KNN model",
      "Built the multithreaded alert dispatcher and connected Firebase event logging",
      "Developed the Flask application dashboard displaying live camera feed with overlay skeletal graphs"
    ],
    verifiedResults: "Real-time pose estimation and classification running at high FPS with prompt alert delivery across audio and email channels.",
    futureImprovements: [
      "Integration of spatio-temporal action recognition (e.g. 3D-CNN / Video Vision Transformers) for temporal actions like falls over time (Proposed)",
      "Porting to embedded edge compute platforms (NVIDIA Jetson, Raspberry Pi) for localized on-premise cameras (Proposed)",
      "Multi-person simultaneous occlusion tracking and persistent re-identification (Proposed)"
    ],
    githubUrl: "https://github.com/bhumisurya/Abnormal-Activity-Detection-Using-AI",
    architectureDiagram: {
      type: "pose",
      steps: [
        {
          title: "1. Video Stream Ingestion",
          description: "High-frame-rate live camera feed processed through OpenCV capture loops",
          icon: "Video",
          tags: ["OpenCV", "Frame Preprocessing", "Color Correction"]
        },
        {
          title: "2. 33-Point Pose Landmark Extraction",
          description: "MediaPipe Pose deep neural tracker extracting 3D joint coordinates",
          icon: "Activity",
          tags: ["MediaPipe Pose", "Skeletal Mesh", "Coordinate Norm"]
        },
        {
          title: "3. Spatial Feature Vector",
          description: "Joint angular calculations, body center-of-mass shifts, and elevation ratios",
          icon: "Binary",
          tags: ["NumPy", "Trigonometric Features", "Vector Calc"]
        },
        {
          title: "4. KNN Posture Classification",
          description: "Rapid classification comparing live posture vectors against verified activity baselines",
          icon: "Brain",
          tags: ["Scikit-learn KNN", "Low Latency", "Binary/Multi State"]
        },
        {
          title: "5. Multithreaded Alert Dispatch",
          description: "Asynchronous triggers sending real-time audio alarms, Firebase logs, and email alerts",
          icon: "Bell",
          tags: ["Firebase Sync", "TTS Voice Alarm", "Email Dispatch"]
        }
      ]
    }
  },
  {
    id: "weather-prediction-ml",
    title: "Weather Prediction Using Machine Learning",
    shortDescription: "High-accuracy predictive meteorological modeling system powered by Random Forest and XGBoost, served via a high-performance FastAPI REST API.",
    fullOverview: "Constructed an end-to-end Machine Learning pipeline that performs meteorological forecasting with over 96% classification accuracy. The system processes multi-dimensional atmospheric readings, applies extensive feature engineering and variance filtering, and evaluates ensemble algorithms before serving inference through a clean, documented FastAPI REST API.",
    category: "Machine Learning & Production APIs",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "XGBoost",
      "Random Forest",
      "FastAPI",
      "REST APIs"
    ],
    metrics: "96%+ Accuracy",
    problemStatement: "Accurate localized weather forecasting is crucial for agriculture, disaster preparedness, and logistics, yet traditional physical simulation models require massive supercomputing power and lack agility for localized micro-climate predictions.",
    solutionOverview: "Formulated a data-driven machine learning methodology leveraging historical meteorological indicators. Extensively cleaned the data, resolved multicollinearity, engineered atmospheric interaction features, and trained optimized Random Forest and XGBoost ensemble models, deploying the champion model behind an asynchronous FastAPI REST interface.",
    keyImplementations: [
      "Exhaustive Exploratory Data Analysis (EDA) on weather parameters (temperature, pressure, humidity, dew point, wind vectors)",
      "Robust data cleaning pipeline: imputation of missing sensor values and IQR outlier mitigation",
      "Feature engineering: cyclical datetime encoding, temperature-humidity index, atmospheric stability metrics",
      "Ensemble model benchmarking: hyperparameter optimization comparing Random Forest and XGBoost",
      "Achieved 96%+ classification accuracy on test evaluation benchmarks",
      "FastAPI RESTful microservice development with Pydantic request validation and interactive Swagger documentation"
    ],
    myContributions: [
      "Performed data cleansing, missing value imputation, and feature engineering",
      "Tuned hyperparameters for Random Forest and XGBoost using cross-validation",
      "Achieved the documented 96%+ prediction accuracy through iterative feature selection",
      "Architected the FastAPI prediction endpoint with schema validation and test suites"
    ],
    verifiedResults: "Achieved 96%+ classification accuracy across test validation datasets with sub-20ms model prediction response times via FastAPI.",
    futureImprovements: [
      "Integration of automated live meteorological API ingestion (OpenWeatherMap / NOAA) for continuous online learning (Proposed)",
      "Containerization with Docker and deployment onto cloud container runtimes with health check probes (Proposed)",
      "Time-series expansion utilizing LSTM / Prophet models for 7-day trend projections (Proposed)"
    ],
    githubUrl: "https://github.com/bhumisurya/Weather-Prediction-Using-Machine-Learning",
    architectureDiagram: {
      type: "weather",
      steps: [
        {
          title: "1. Atmospheric Data Ingestion",
          description: "Multi-parameter sensor observations: temperature, relative humidity, pressure, wind velocity",
          icon: "CloudRain",
          tags: ["Historical Sensors", "CSV / Data Streams", "Pandas"]
        },
        {
          title: "2. Data Preprocessing & Cleaning",
          description: "Handling missing sensor readings, clipping anomalies, and scaling continuous variables",
          icon: "Filter",
          tags: ["IQR Filtering", "Imputation", "StandardScaler"]
        },
        {
          title: "3. Feature Engineering",
          description: "Cyclic time encoding (sin/cos of month/day), heat indices, and dew point calculations",
          icon: "Binary",
          tags: ["Domain Features", "Correlation Analysis", "NumPy"]
        },
        {
          title: "4. Ensemble Model Training (96%+ Acc)",
          description: "Benchmarked Random Forest vs XGBoost with grid search hyperparameter tuning",
          icon: "Brain",
          tags: ["XGBoost", "Random Forest", "96%+ Accuracy"]
        },
        {
          title: "5. FastAPI REST API Serving",
          description: "High-speed asynchronous endpoints delivering structured JSON forecasts in under 20ms",
          icon: "Zap",
          tags: ["FastAPI", "Pydantic Schema", "REST Endpoints"]
        }
      ]
    }
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    description: "Core languages used for systems, data manipulation, and software engineering",
    icon: "Code",
    skills: ["Python", "SQL", "Core Java"]
  },
  {
    category: "Machine Learning & AI",
    description: "Predictive modeling, classical algorithms, and statistical data transformations",
    icon: "BrainCircuit",
    skills: [
      "Scikit-learn",
      "Supervised Learning",
      "Classification",
      "Regression",
      "KNN",
      "Logistic Regression",
      "Decision Trees",
      "Random Forest",
      "XGBoost",
      "Feature Engineering",
      "Data Preprocessing",
      "Model Evaluation"
    ]
  },
  {
    category: "Deep Learning",
    description: "Neural network architectures and deep learning frameworks",
    icon: "Layers",
    skills: [
      "ANN",
      "CNN",
      "TensorFlow",
      "PyTorch",
      "Model Training",
      "Model Evaluation"
    ]
  },
  {
    category: "Generative AI & NLP",
    description: "Modern language models, retrieval pipelines, and agentic workflows",
    icon: "Sparkles",
    skills: [
      "Generative AI",
      "LLMs",
      "NLP",
      "RAG",
      "Prompt Engineering",
      "LangChain",
      "LangGraph",
      "AI Agents",
      "Embeddings",
      "Vector Databases",
      "Semantic Search"
    ]
  },
  {
    category: "Computer Vision",
    description: "Visual signal processing, pose estimation, and real-time facial analytics",
    icon: "Eye",
    skills: [
      "Computer Vision",
      "OpenCV",
      "MediaPipe",
      "Pose Estimation",
      "Image Processing",
      "Facial Landmark Detection",
      "Emotion Recognition",
      "Human Activity Recognition",
      "Real-Time Video Processing"
    ]
  },
  {
    category: "Data Analytics & Visualization",
    description: "Exploratory analysis, statistical computations, and communicative charting",
    icon: "BarChart3",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "EDA",
      "Data Cleaning",
      "Data Visualization"
    ]
  },
  {
    category: "Backend & Deployment",
    description: "Microservices, REST APIs, and application frameworks for ML delivery",
    icon: "Server",
    skills: [
      "Flask",
      "FastAPI",
      "REST APIs",
      "Model Deployment",
      "Firebase"
    ]
  },
  {
    category: "Databases & Storage",
    description: "Relational data engines, cloud stores, and modern vector indexing",
    icon: "Database",
    skills: [
      "MySQL",
      "Firebase",
      "DBMS",
      "PostgreSQL (pgvector)"
    ]
  },
  {
    category: "Tools & DevOps",
    description: "Version control, workflow collaboration, and containerized development",
    icon: "Wrench",
    skills: [
      "Git",
      "GitHub",
      "Docker"
    ]
  }
];

export const educationHistory: EducationItem[] = [
  {
    degree: "Post Graduate Certificate Programme in Artificial Intelligence",
    institution: "C-DAC Mumbai (Centre for Development of Advanced Computing)",
    period: "Feb 2026 – Aug 2026",
    score: "79%",
    scoreType: "Percentage",
    highlights: [
      "Comprehensive postgraduate curriculum in Machine Learning, Deep Learning, Computer Vision, and Generative AI",
      "Practical capstone engineering covering multimodal AI systems, PyTorch, TensorFlow, and LLM workflows",
      "Specialized coursework in mathematical foundations of ML, NLP architectures, and production deployment"
    ],
    isCurrentOrRecent: true
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Savitribai Phule Pune University (SPPU)",
    period: "2021 – 2025",
    score: "7.84",
    scoreType: "CGPA",
    highlights: [
      "Strong foundation in Data Structures, Algorithms, Object-Oriented Programming, and Database Management",
      "Hands-on academic projects in Computer Vision, Human Activity Recognition, and Machine Learning",
      "Active participation in technical seminars, coding challenges, and collegiate engineering initiatives"
    ],
    isCurrentOrRecent: false
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Arts, Commerce, Science Junior College, Sinnar",
    period: "2020 – 2021",
    score: "90%",
    scoreType: "Percentage",
    highlights: [
      "Science stream curriculum focused on Mathematics, Physics, and Computer Science fundamentals",
      "Achieved distinction with 90% aggregate score"
    ]
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Loknete Shankarrao Balaji Waje Vidyalaya, Sinnar",
    period: "2018 – 2019",
    score: "85%",
    scoreType: "Percentage",
    highlights: [
      "Exemplary academic record across Science, Mathematics, and Languages",
      "Graduated with 85% distinction score"
    ]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: "cdac-pgcai",
    title: "Post Graduate Certificate Programme in Artificial Intelligence",
    issuer: "Centre for Development of Advanced Computing (C-DAC) & NCVET",
    category: "AI & Data Science",
    year: "2026",
    score: "79% • NSQF Level 6",
    badge: "Govt. of India Certification",
    credentialId: "C261025998F54 (Enrolment: 260240328011)",
    fileUrl: "/certificates/cdac-pgcai.pdf",
    details: "NCVET recognised Government of India postgraduate certification. Spanning 1200 Hours of intensive coursework, 40 Credits at NCrF/NSQF Level 6 covering Machine Learning, Deep Learning, Computer Vision, and Generative AI.",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "Generative AI", "TensorFlow", "PyTorch"]
  },
  {
    id: "nptel-big-data",
    title: "NPTEL Online Certification — Big Data Computing",
    issuer: "NPTEL • IIT Kanpur & SWAYAM (MoE, Govt. of India)",
    category: "AI & Data Science",
    year: "2024",
    score: "67% (Elite Badge)",
    badge: "Elite Certification",
    credentialId: "NPTEL24CS130S457500915",
    fileUrl: "/certificates/nptel-big-data.png",
    details: "8-week intensive certification by IIT Kanpur covering distributed computing paradigms, Hadoop MapReduce, Apache Spark, HDFS, and big data architecture.",
    skills: ["Big Data", "Distributed Computing", "Hadoop", "Apache Spark", "MapReduce"]
  },
  {
    id: "skybrisk-python-internship",
    title: "Python Developer Internship Certificate",
    issuer: "The Skybrisk",
    category: "Core Engineering",
    year: "2025 – 2026",
    score: "Internship Completion",
    badge: "Industry Internship",
    credentialId: "EMP20250320-0675",
    fileUrl: "/certificates/skybrisk-python-internship.pdf",
    details: "Successfully completed the Python Developer Internship at The Skybrisk (Batch: October 20, 2025 to January 20, 2026) designing and building robust Python backend applications.",
    skills: ["Python", "Backend Development", "REST APIs", "Application Architecture"]
  },
  {
    id: "gl-image-processing",
    title: "Digital Image Processing",
    issuer: "Great Learning Academy",
    category: "AI & Data Science",
    year: "2024",
    badge: "Computer Vision",
    credentialId: "PELWYFBX",
    verificationUrl: "https://www.mygreatlearning.com/certificate/PELWYFBX",
    fileUrl: "/certificates/great-learning-digital-image-processing.pdf",
    details: "Spatial image filtering, frequency domain analysis, color spaces, edge detection, and morphological transformations for Computer Vision pipelines.",
    skills: ["Computer Vision", "Image Processing", "OpenCV", "Spatial Filters"]
  },
  {
    id: "gl-data-science",
    title: "Data Science Foundations",
    issuer: "Great Learning Academy",
    category: "AI & Data Science",
    year: "2024",
    badge: "Data Science",
    credentialId: "RKKKAJVN",
    verificationUrl: "https://www.mygreatlearning.com/certificate/RKKKAJVN",
    fileUrl: "/certificates/great-learning-data-science-foundations.pdf",
    details: "Statistical data modeling, feature selection, exploratory data analysis, hypothesis testing, and predictive analytics workflow.",
    skills: ["Data Science", "EDA", "Statistics", "Pandas", "NumPy"]
  },
  {
    id: "gl-aws-beginners",
    title: "AWS For Beginners",
    issuer: "Great Learning Academy",
    category: "Cloud & Web",
    year: "2024",
    badge: "Cloud Infrastructure",
    credentialId: "NCYZDQQN",
    verificationUrl: "https://www.mygreatlearning.com/certificate/NCYZDQQN",
    fileUrl: "/certificates/great-learning-aws-beginners.pdf",
    details: "Core AWS cloud services including Amazon EC2 computing, S3 storage buckets, IAM role permissions, and scalable cloud application hosting.",
    skills: ["AWS", "Cloud Computing", "Amazon EC2", "Amazon S3", "IAM Security"]
  },
  {
    id: "sunbeam-precat",
    title: "PreCAT - Preparatory Course for Entrance Exam",
    issuer: "Sunbeam Institute of Information Technology",
    category: "Core Engineering",
    year: "2025 – 2026",
    badge: "Advanced Computing",
    credentialId: "690c7c5def6a3b269720a2bb",
    verificationUrl: "http://certificate.sunbeamapps.org/validate-certificate?b=OC-20-LAPTOP&s=690c7c5def6a3b269720a2bb",
    fileUrl: "/certificates/sunbeam-precat.pdf",
    details: "Rigorous computing fundamentals including C Programming, Advanced Data Structures, C++ OOP, Operating Systems, Computer Architecture, Aptitude, and Artificial Intelligence foundations.",
    skills: ["C++", "Data Structures", "Operating Systems", "Computer Architecture", "Algorithms"]
  },
  {
    id: "fuel-core-java-aptitude",
    title: "Future Skills: Core Java & Aptitude Training",
    issuer: "FUEL Institute (Friends Union for Energising Lives)",
    category: "Core Engineering",
    year: "2025",
    badge: "Core Engineering & Aptitude",
    fileUrl: "/certificates/fuel-core-java-aptitude.jpeg",
    details: "Completed mandatory future skills training covering Object-Oriented Programming (OOP) paradigms in Java, classes, inheritance, polymorphism, logical reasoning, and quantitative problem solving.",
    skills: ["Core Java", "OOP", "Logical Reasoning", "Quantitative Aptitude"]
  },
  {
    id: "linkedin-python-oop",
    title: "Python Object-Oriented Programming",
    issuer: "LinkedIn Learning",
    category: "Core Engineering",
    year: "2023",
    badge: "Software Architecture",
    credentialId: "e544650d92385aca2824045c5962673acff2858de205b5042589c45ee5999a7b",
    fileUrl: "/certificates/linkedin-python-oop.pdf",
    details: "In-depth OOP architecture in Python: class design, inheritance hierarchies, abstract base classes, encapsulation, magic methods, and clean coding standards.",
    skills: ["Python", "OOP", "Design Patterns", "Clean Code"]
  },
  {
    id: "linkedin-data-structures",
    title: "Programming Foundations: Data Structures",
    issuer: "LinkedIn Learning",
    category: "Core Engineering",
    year: "2023",
    badge: "Algorithmic Foundations",
    credentialId: "b457fa37480e6eb61176bb0903e14d833145bae29c56885ea7a0e6113200a557",
    fileUrl: "/certificates/linkedin-data-structures.pdf",
    details: "Algorithmic complexity, memory management, arrays, linked lists, stacks, queues, hash tables, and tree/graph traversals.",
    skills: ["Data Structures", "Algorithms", "Time Complexity", "Trees & Graphs"]
  },
  {
    id: "linkedin-fullstack",
    title: "Getting Started as a Full-Stack Web Developer",
    issuer: "LinkedIn Learning",
    category: "Cloud & Web",
    year: "2023",
    badge: "Full-Stack Development",
    credentialId: "a3a1d298b50a9c0d1620f1f61d9bc688d49427d3e37a93a0fc331edb1865c233",
    fileUrl: "/certificates/linkedin-fullstack-dev.pdf",
    details: "Full-stack architectural workflow, modern web fundamentals, RESTful API consumption, and application integration.",
    skills: ["Full-Stack", "Web Development", "REST APIs", "Frontend & Backend"]
  },
  {
    id: "linkedin-iot",
    title: "IoT Foundations: Fundamentals",
    issuer: "LinkedIn Learning",
    category: "Industry & Foundational",
    year: "2023",
    badge: "IoT & Embedded Systems",
    credentialId: "c7f2eb8f9a82c0769657a9f202568e9e6d3185b556b42867014c11cf480d042d",
    fileUrl: "/certificates/linkedin-iot-fundamentals.pdf",
    details: "Connected IoT ecosystems, microcontroller sensory inputs, wireless telemetry, edge device data flows, and hardware integration.",
    skills: ["IoT", "Edge Computing", "Sensors", "Hardware Telemetry"]
  },
  {
    id: "cyberfrat-nashik",
    title: "CyberFrat Nashik Meetup Participation",
    issuer: "CyberFrat & The Hackers Meetup",
    category: "Industry & Foundational",
    year: "2024",
    badge: "Cybersecurity Community",
    credentialId: "74OKRC-CE000019",
    fileUrl: "/certificates/cyberfrat-nashik-meetup.pdf",
    details: "Attended the inaugural cybersecurity & technology meetup in Nashik organized by CyberFrat in collaboration with The Hackers Meetup.",
    skills: ["Cybersecurity", "Network Defense", "Threat Analysis", "Community"]
  },
  {
    id: "energy-swaraj",
    title: "Energy Literacy Training (12 Modules)",
    issuer: "Energy Swaraj Foundation",
    category: "Industry & Foundational",
    year: "2023",
    badge: "Clean Tech & Sustainability",
    credentialId: "ELT23-9-596f",
    fileUrl: "/certificates/energy-swaraj-foundation.pdf",
    details: "12-module certified training on carbon footprints, energy accounting, renewable solar energy frameworks, and climate sustainability metrics.",
    skills: ["Clean Tech", "Carbon Accounting", "Energy Metrics", "Sustainability"]
  }
];

export const languagesData = [
  { language: "English", proficiency: "Professional Working Proficiency" },
  { language: "Hindi", proficiency: "Native / Full Professional Proficiency" },
  { language: "Marathi", proficiency: "Native / Full Professional Proficiency" }
];
