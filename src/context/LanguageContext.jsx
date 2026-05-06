import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage ? savedLanguage : "vi"; // Mặc định là tiếng Việt
  });

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "vi" ? "en" : "vi"));
  };

  const translations = {
    vi: {
      about: "Giới thiệu",
      skills: "Kỹ năng",
      projects: "Dự án",
      hobbies: "Sở thích",
      contact: "Liên hệ",

      // Hero
      hero_greeting: "Xin chào, tôi là",
      hero_name: "Trường Giang",
      hero_title: "Một kỹ sư phần mềm",
      hero_desc:
        "Tôi chuyên thiết kế và phát triển các hệ thống phần mềm hiện đại, tối ưu hiệu năng và mang tính mở rộng cao. Từ nền tảng backend vững chắc đến giao diện hướng người dùng. Hợp tác để đưa tầm nhìn của bạn vào cuộc sống.",
      hero_btn_work: "Xem Dự Án",
      hero_btn_contact: "Liên Hệ Tôi",

      // About
      about_title: "Giới Thiệu",
      about_subtitle: "Tôi là ai?",
      about_p1:
        "Xin chào, tôi là Kiến Nguyễn Trường Giang - một Kỹ sư Phần mềm với đam mê kiến tạo các kiến trúc hệ thống bền vững và phát triển ứng dụng tích hợp AI. Dựa trên nền tảng chuyên sâu về lập trình Full-stack cùng hệ sinh thái .NET (C#), mục tiêu của tôi là chuyển hóa các bài toán kỹ thuật phức tạp thành những giải pháp công nghệ tối ưu, vận hành mượt mà và mang lại giá trị thực tiễn cho doanh nghiệp.",
      about_p2:
        "Tôi luôn giữ cho mình sự tò mò và đam mê khám phá những điều mới. Khi tạm rời màn hình code, ôi dành thời gian khám phá kiến thức mới, tham gia cộng đồng mã nguồn mở, hoặc mài giũa thêm kỹ năng UI/UX để sản phẩm làm ra không chỉ chạy tốt mà còn phải có giao diện chuẩn Production.",
      about_loc: "Địa điểm",
      about_loc_val: "Việt Nam",
      about_exp: "Kinh nghiệm",
      about_exp_val: "Hơn 1 năm",
      about_edu: "Học vấn",
      about_edu_val: "Kỹ sư Phần mềm",
      about_cert: "Chứng chỉ",
      about_cert_val: "Tiếng Anh B1",
      about_btn: "Tải Resume",

      // Skills
      skills_title: "Kỹ Năng",
      skills_cat1: "Phát Triển Frontend",
      skills_cat2: "Phát Triển Backend",
      skills_cat3: "Công Cụ & Hệ Sinh Thái",
      skills_cat4: "Kỹ Năng Khác",
      skill_responsive: "Làm việc đội nhóm hiệu quả",
      skill_agile: "Tư duy thiết kế hệ thống",
      skill_problem: "Giải quyết vấn đề",
      skill_uiux: "Thiết kế UI/UX",
      skill_clean: "Mã nguồn sạch",
      skill_perf: "Tối ưu Hiệu suất",

      // Projects
      projects_title: "Dự Án Nổi Bật",
      projects_code: "Mã Nguồn",
      projects_demo: "Xem Trực Tiếp",
      project1_title: "Hệ Thống Quản Lý Lớp Học Số - Digital Class",
      project1_desc:
        "Giải pháp chuyển đổi số full-stack trong lĩnh vực giáo dục đại học với các tính năng quản lý lớp học, học tập trực tuyến, đánh giá và quản lý sinh viên.",
      project2_title: "Hệ Thống Quản Lý Thư Viện Số - Digital Library",
      project2_desc:
        "Giải pháp quản lý thư viện số với các tính năng quản lý sách, quản lý mượn trả và quản lý thành viên.",
      project3_title: "Hệ Thống Quản Lý Nhân Sự - HRM",
      project3_desc:
        "Hệ thống quản lý nhân sự với các tính năng quản lý nhân viên, quản lý lương và quản lý chấm công.",
      project4_title: "Hệ Thống Quản Lý Kinh Doanh - BMS",
      project4_desc:
        "Giải pháp quản lý doanh nghiệp full-stack với các tính năng quản lý khách hàng, quản lý sản phẩm, quản lý đơn hàng và báo cáo doanh thu.",
      project5_title: "Ứng Dụng Hỗ Trợ Kỹ Thuật - IT HelpDesk",
      project5_desc:
        "Hệ thống hỗ trợ kỹ thuật AI, giúp giải đáp các câu hỏi về kỹ thuật và hỗ trợ người dùng giải quyết các vấn đề kỹ thuật.",
      project6_title: "Hệ Thống Quản Lý Hoạt Động Quán Ăn Buffet",
      project6_desc:
        "Hệ thống quản lý hoạt động quán ăn buffet với các tính năng quản lý món ăn, quản lý khách hàng, quản lý đơn hàng và báo cáo doanh thu kết hợp với POS-Oder-BMS.",

      // Hobbies
      hobbies_title: "Sở Thích",
      hobby_gaming: "Chơi Game",
      hobby_photo: "Nhiếp Ảnh",
      hobby_travel: "Du Lịch",
      hobby_music: "Nghe Nhạc",
      hobby_reading: "Đọc Sách",

      // Contact
      contact_title: "Liên Hệ",
      contact_subtitle: "Sẵn sàng cho dự án tiếp theo ?",
      contact_desc:
        "Đừng ngần ngại liên hệ với tôi để hợp tác, làm dự án freelance, hoặc chỉ để nói lời chào. Tôi luôn sẵn lòng đón nhận những cơ hội mới.",
      contact_loc_val: "Cần Thơ, Việt Nam",
      contact_form_name: "Tên",
      contact_form_name_ph: "Tên của bạn",
      contact_form_email: "Email",
      contact_form_email_ph: "Email của bạn",
      contact_form_subject: "Chủ đề",
      contact_form_subject_ph: "Chủ đề",
      contact_form_msg: "Tin nhắn",
      contact_form_msg_ph: "Tin nhắn của bạn",
      contact_btn: "Gửi Tin Nhắn",
      contact_success: "Cảm ơn bạn! Tin nhắn đã được gửi thành công.",
      contact_error: "Đã có lỗi xảy ra. Vui lòng thử lại sau.",

      // Footer
      footer_desc:
        "Xây dựng trải nghiệm kỹ thuật số với những công nghệ hiện đại.",
      footer_copy: "Hồ Sơ Năng Lực Này. Đã đăng ký bản quyền.",
    },
    en: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      hobbies: "Hobbies",
      contact: "Contact",

      // Hero
      hero_greeting: "Hello, I'm",
      hero_name: "A Passionate Developer",
      hero_title: "Building Digital Experiences",
      hero_desc:
        "I specialize in crafting high-quality, modern web applications that are fast, accessible, and user-centric. Let's build something amazing together.",
      hero_btn_work: "View Work",
      hero_btn_contact: "Contact Me",

      // About
      about_title: "About Me",
      about_subtitle: "Who am I?",
      about_p1:
        "I am a dedicated software developer with a strong focus on building highly performant, scalable, and visually appealing web applications. With a solid foundation in modern JavaScript frameworks and backend architectures, I strive to create seamless user experiences.",
      about_p2:
        "My journey in tech is driven by curiosity and continuous learning. When I'm not coding, you can find me exploring new technologies, contributing to open-source, or refining my UI/UX design skills.",
      about_loc: "Location",
      about_loc_val: "Vietnam",
      about_exp: "Experience",
      about_exp_val: "1+ Years",
      about_edu: "Education",
      about_edu_val: "Software Engineering",
      about_cert: "Certificate",
      about_cert_val: "B1 English",
      about_btn: "Download Resume",

      // Skills
      skills_title: "My Skills",
      skills_cat1: "Frontend Development",
      skills_cat2: "Backend Development",
      skills_cat3: "Tools & Ecosystem",
      skills_cat4: "Other Skills",
      skill_responsive: "Responsive Design",
      skill_agile: "Agile Methodology",
      skill_problem: "Problem Solving",
      skill_uiux: "UI/UX Principles",
      skill_clean: "Clean Code",
      skill_perf: "Performance Optimization",

      // Projects
      projects_title: "Featured Projects",
      projects_code: "Code",
      projects_demo: "Live Demo",
      project1_title: "E-Commerce Platform",
      project1_desc:
        "A full-stack e-commerce solution with advanced search, cart management, and secure payment processing. Built for high performance and scalability.",
      project2_title: "Business Management System",
      project2_desc:
        "An enterprise-level dashboard for managing customers, products, and sales reports with real-time data visualization.",
      project3_desc:
        "Human resource management system with employee management, payroll, and attendance tracking features.",
      project4_title: "E-Commerce Platform - E-Shop",
      project4_desc:
        "A full-stack e-commerce solution with advanced search, cart management, and online payment processing.",
      project5_title: "Sales Management System - POS",
      project5_desc:
        "Point-of-sale system with real-time sales reports and inventory management.",
      project6_title: "Intelligent AI Assistant",
      project6_desc:
        "Smart chatbot system for customer support integrated with Large Language Models (LLM).",

      // Hobbies
      hobbies_title: "My Hobbies",
      hobby_gaming: "Gaming",
      hobby_photo: "Photography",
      hobby_travel: "Traveling",
      hobby_music: "Listening to Music",
      hobby_reading: "Reading",

      // Contact
      contact_title: "Get In Touch",
      contact_subtitle: "Let's talk about everything!",
      contact_desc:
        "Feel free to reach out for collaborations, freelance projects, or just to say hi. I am currently open to new opportunities.",
      contact_loc_val: "Ho Chi Minh City, Vietnam",
      contact_form_name: "Name",
      contact_form_name_ph: "Your Name",
      contact_form_email: "Email",
      contact_form_email_ph: "Your Email",
      contact_form_subject: "Subject",
      contact_form_subject_ph: "Subject",
      contact_form_msg: "Message",
      contact_form_msg_ph: "Your Message",
      contact_btn: "Send Message",
      contact_success: "Thank you! Your message has been sent successfully.",
      contact_error: "Something went wrong. Please try again later.",

      // Footer
      footer_desc: "Building digital experiences with modern technologies.",
      footer_copy: "Developer Portfolio. All rights reserved.",
    },
  };

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
