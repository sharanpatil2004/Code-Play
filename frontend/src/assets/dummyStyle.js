export const navbarStyles = {
  nav: "w-full bg-gradient-to-br from-[#f7f1e3] via-[#eaf6fb] to-[#f6eef9] shadow-lg py-4 sm:py-5 px-4 sm:px-6 lg:px-10 relative overflow-visible",

  decorativePattern: "absolute inset-0 opacity-25 pointer-events-none z-0",

  decorativePatternBackground: `url("data:image/svg+xml,%3Csvg width='240' height='120' viewBox='0 0 240 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%235f8f8a' stroke-width='2' opacity='.55'%3E%3Cpath d='M20 30l-12 10 12 10'/%3E%3Cpath d='M35 30l12 10-12 10'/%3E%3Cpath d='M29 27l-6 26'/%3E%3Cpath d='M72 24h18'/%3E%3Cpath d='M72 34h12'/%3E%3Cpath d='M72 44h20'/%3E%3Cpath d='M120 22l-8 8 8 8'/%3E%3Cpath d='M132 22l8 8-8 8'/%3E%3Cpath d='M165 25h25v20h-25z'/%3E%3Cpath d='M170 50h15'/%3E%3Cpath d='M174 55h7'/%3E%3Cpath d='M205 25l8 8-8 8'/%3E%3Cpath d='M218 25l-8 8 8 8'/%3E%3Ccircle cx='55' cy='82' r='10'/%3E%3Cpath d='M50 82h10M55 77v10'/%3E%3Cpath d='M105 75l8 8-8 8-8-8z'/%3E%3Cpath d='M145 75h25M145 83h18M145 91h28'/%3E%3Cpath d='M195 76c8-8 16 8 24 0'/%3E%3C/g%3E%3C/svg%3E")`,

  bubble1:
    "hidden md:block absolute top-8 left-1/4 w-36 h-36 sm:w-40 sm:h-40 bg-sky-200 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-float-slow pointer-events-none z-0",

  bubble2:
    "hidden lg:block absolute bottom-2 right-20 w-28 h-28 lg:w-32 lg:h-32 bg-green-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float-slower pointer-events-none z-0",

  bubble3:
    "hidden md:block absolute top-1/3 left-20 w-20 h-20 md:w-24 md:h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float-slowest pointer-events-none z-0",

  container:
    "max-w-7xl mx-auto flex items-center justify-between relative z-10 min-h-[52px]",

  logoContainer: "flex items-center flex-shrink-0",

  logoButton:
    "inline-flex items-center p-0 bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-300 transform transition-transform duration-200 hover:scale-[1.02] cursor-pointer",

  logoText:
    "text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#416f6b] via-[#4f806b] to-[#72a85f] whitespace-nowrap drop-shadow-sm",

  logoLink: "relative bg-transparent p-0 rounded-none",

  logoInner: "bg-transparent p-0 rounded-none",

  logoImage: "hidden",

  titleContainer: "hidden",

  titleBackground: "hidden",

  titleText: "hidden",

  desktopButtonsContainer:
    "hidden md:flex items-center cursor-pointer flex-shrink-0 gap-3",

  spacer: "hidden",

  resultsButton:
    "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#dff1e5] to-[#c9ebd4] text-[#315d4a] text-sm sm:text-base font-medium shadow-md cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-200 whitespace-nowrap",

  logoutButton:
    "inline-flex cursor-pointer items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#f1b7ad] to-[#f5cdc5] text-[#713b35] text-sm sm:text-base font-medium shadow-md transform transition-all duration-200 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-200 whitespace-nowrap",

  loginButton:
    "inline-flex cursor-pointer items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#d9f0e1] to-[#c6ead2] text-[#315d4a] text-sm sm:text-base font-medium shadow-md transform transition-all duration-200 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-200 whitespace-nowrap",

  buttonIcon: "w-5 h-5 flex-shrink-0 stroke-[2]",

  mobileMenuContainer:
    "md:hidden relative flex items-center flex-shrink-0 ml-3 z-[100]",

  menuToggleButton:
    "inline-flex items-center justify-center w-12 h-12 p-2 rounded-xl bg-[#fffdf8] text-[#416f6b] shadow-md border border-[#e5e9e5] hover:bg-[#f4faf7] hover:scale-105 transform transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-300 cursor-pointer",

  menuIcon: "w-7 h-7 flex-shrink-0 stroke-[2]",

  mobileMenuPanel:
    "absolute right-0 top-full mt-3 w-56 bg-[#fffdf8] rounded-2xl shadow-xl border border-[#dce8e5] z-[200] overflow-hidden",

  mobileMenuList: "divide-y divide-[#e5ece8]",

  mobileMenuItem:
    "w-full text-left px-5 py-4 flex items-center gap-3 text-base text-[#40545c] hover:bg-[#edf7f2] active:bg-[#e4f1eb] transition-colors cursor-pointer",

  mobileMenuIcon: "w-5 h-5 flex-shrink-0 text-[#416f6b] stroke-[2]",

  animations: `
    @keyframes float-slow {
      0% {
        transform: translateY(0px);
      }

      50% {
        transform: translateY(-16px);
      }

      100% {
        transform: translateY(0px);
      }
    }

    @keyframes float-slower {
      0% {
        transform: translateY(0px);
      }

      50% {
        transform: translateY(-10px);
      }

      100% {
        transform: translateY(0px);
      }
    }

    @keyframes float-slowest {
      0% {
        transform: translateY(0px);
      }

      50% {
        transform: translateY(-6px);
      }

      100% {
        transform: translateY(0px);
      }
    }

    .animate-float-slow {
      animation: float-slow 7s ease-in-out infinite;
    }

    .animate-float-slower {
      animation: float-slower 9s ease-in-out infinite;
    }

    .animate-float-slowest {
      animation: float-slowest 11s ease-in-out infinite;
    }

    @media (max-width: 420px) {
      nav {
        padding-left: 14px;
        padding-right: 14px;
      }
    }

    @media (max-width: 360px) {
      nav {
        padding-left: 10px;
        padding-right: 10px;
      }

      .codeplay-logo-text {
        font-size: 1.75rem;
      }
    }
  `,
};

export const loginStyles = {
  pageContainer:
    "min-h-screen bg-gradient-to-br from-[#f7f1e3] via-[#eaf6fb] to-[#edf7ef] flex items-center justify-center p-4 sm:p-6 relative overflow-hidden",

  bubble1:
    "pointer-events-none hidden md:block absolute -top-10 -left-24 w-72 h-72 bg-sky-200 rounded-full blur-3xl opacity-30 animate-float-slow",

  bubble2:
    "pointer-events-none hidden md:block absolute bottom-10 right-10 w-56 h-56 bg-green-100 rounded-full blur-3xl opacity-30 animate-float-slower",

  backButton:
    "absolute top-5 left-4 sm:top-6 sm:left-6 inline-flex items-center gap-2 text-[#40545c] bg-[#fffdf8]/80 backdrop-blur-sm px-3 py-2 rounded-full shadow hover:scale-105 transform transition",

  backButtonIcon: "w-4 h-4",

  backButtonText: "text-xs sm:text-sm font-medium",

  formContainer:
    "w-full max-w-sm pt-10 sm:max-w-md md:max-w-lg lg:max-w-lg relative z-20",

  form: "w-full",

  formWrapper: "relative",

  animatedBorder:
    "rounded-3xl p-1 sm:p-[2px] bg-gradient-to-r from-sky-300 via-teal-300 to-green-200 animate-border",

  formContent:
    "bg-[#fffdf8]/95 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-xl",

  heading:
    "flex items-center gap-3 text-xl sm:text-2xl md:text-3xl font-semibold mb-5 sm:mb-6",

  headingIcon:
    "inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-sky-600 to-teal-600 text-white shadow-md",

  headingIconInner: "w-4 h-4 sm:w-5 sm:h-5",

  headingText: "text-[#24506a]",

  subtitle: "text-sm text-[#64747a] mb-5 sm:mb-6",

  label: "block mb-4",

  labelText: "text-sm font-medium text-[#40545c]",

  inputContainer: "mt-2 relative",

  inputIcon:
    "absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none",

  inputIconInner: "w-4 h-4 sm:w-5 sm:h-5 text-[#8aa0a8]",

  input:
    "w-full pl-10 sm:pl-12 py-3 rounded-xl transition-shadow duration-150 border focus:outline-none focus:ring-2 focus:ring-sky-200 focus:shadow-md bg-[#fffdf8]",

  inputNormal: "border-[#dce8e5]",

  inputError: "border-red-300",

  passwordInput: "pr-12",

  passwordToggle:
    "absolute inset-y-0 right-0 pr-2 sm:pr-3 flex items-center text-[#40545c] cursor-pointer",

  passwordToggleIcon: "w-4 h-4 sm:w-5 sm:h-5",

  errorText: "mt-2 text-xs text-red-600",

  submitError: "text-sm text-red-600 mb-3",

  buttonsContainer: "mt-4 grid gap-3",

  submitButton:
    "w-full inline-flex items-center cursor-pointer justify-center gap-3 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-sky-500 to-teal-500 text-white font-semibold shadow-lg transform transition hover:scale-[1.02] disabled:opacity-60",

  submitButtonIcon: "w-4 h-4",

  submitButtonText: "text-sm sm:text-base",

  signupContainer: "mt-6",

  signupContent:
    "flex flex-col sm:flex-row items-center justify-center gap-3 px-4 py-3 rounded-full bg-[#fffdf8]/80 backdrop-blur-sm shadow",

  signupText: "text-sm text-[#40545c]",

  signupLink: "text-[#26718a] font-semibold hover:underline",

  animations: `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

    :root {
      --card-radius: 24px;
    }

    @keyframes gradient-anim {
      0% {
        background-position: 0% 50%;
      }

      50% {
        background-position: 100% 50%;
      }

      100% {
        background-position: 0% 50%;
      }
    }

    .animate-border {
      border-radius: var(--card-radius);
      padding: 2px;
      background: linear-gradient(
        90deg,
        #7ec8df,
        #5fb7a5,
        #a8d5ba
      );
      background-size: 200% 200%;
      animation: gradient-anim 6s ease infinite;
    }

    @keyframes float-slow {
      0% {
        transform: translateY(0px);
      }

      50% {
        transform: translateY(-18px);
      }

      100% {
        transform: translateY(0px);
      }
    }

    @keyframes float-slower {
      0% {
        transform: translateY(0px);
      }

      50% {
        transform: translateY(-10px);
      }

      100% {
        transform: translateY(0px);
      }
    }

    .animate-float-slow {
      animation: float-slow 8s ease-in-out infinite;
    }

    .animate-float-slower {
      animation: float-slower 10s ease-in-out infinite;
    }

    #login-heading,
    form,
    input,
    button,
    a,
    p,
    label,
    span {
      font-family: 'Poppins', system-ui, -apple-system,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial;
    }

    @media(max-width:360px) {
      .rounded-3xl {
        border-radius: 14px;
      }
    }

    @media(min-width:1024px) {
      .rounded-3xl {
        border-radius: 24px;
      }
    }
  `,
};

export const signupStyles = {
  pageContainer:
    "min-h-screen bg-gradient-to-br from-[#f7f1e3] via-[#eaf6fb] to-[#edf7ef] flex items-center justify-center p-4 sm:p-6 relative",

  backButton:
    "absolute top-5 left-4 sm:top-6 sm:left-6 inline-flex items-center gap-2 text-[#40545c] bg-[#fffdf8]/80 backdrop-blur-sm px-2.5 sm:px-3 py-2 rounded-full shadow hover:scale-105 transform transition",

  backButtonIcon: "w-4 h-4",

  backButtonText: "text-xs sm:text-sm font-medium",

  formContainer:
    "w-full max-w-sm pt-[15px] sm:max-w-md md:max-w-lg relative z-10",

  animatedBorder:
    "rounded-3xl p-1 sm:p-[2px] bg-gradient-to-r from-sky-300 via-teal-300 to-green-200 animate-border",

  formContent:
    "bg-[#fffdf8]/95 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-xl",

  heading:
    "flex items-center gap-3 text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4",

  headingIcon:
    "inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-sky-600 to-teal-600 text-white shadow-md",

  headingIconInner: "w-4 h-4 sm:w-5 sm:h-5",

  headingText: "text-[#24506a]",

  subtitle: "text-sm text-[#64747a] mb-5 sm:mb-6",

  label: "block mb-3 sm:mb-4",

  labelText: "text-sm font-medium text-[#40545c]",

  inputContainer: "mt-2 relative",

  inputIcon:
    "absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none",

  inputIconInner: "w-4 h-4 sm:w-5 sm:h-5 text-[#8aa0a8]",

  input:
    "w-full pl-10 sm:pl-12 py-3 rounded-xl transition-shadow duration-150 border focus:outline-none focus:ring-2 focus:ring-sky-200 focus:shadow-md bg-[#fffdf8]",

  inputNormal: "border-[#dce8e5]",

  inputError: "border-red-300",

  passwordInput: "pr-12",

  passwordToggle:
    "absolute inset-y-0 right-0 pr-2 sm:pr-3 flex items-center text-[#40545c] cursor-pointer",

  passwordToggleIcon: "w-4 h-4 sm:w-5 sm:h-5",

  errorText: "mt-2 text-xs text-red-600",

  submitError: "text-sm text-red-600 mb-3",

  buttonsContainer: "mt-4 grid gap-3",

  submitButton:
    "w-full inline-flex cursor-pointer items-center justify-center gap-3 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-sky-500 to-teal-500 text-white font-semibold shadow-lg transform transition hover:scale-[1.02] disabled:opacity-60",

  loginPromptContainer: "mt-5 sm:mt-6",

  loginPromptContent:
    "flex flex-col sm:flex-row items-center justify-center gap-3 px-3 sm:px-4 py-3 rounded-full bg-[#fffdf8]/80 backdrop-blur-sm shadow",

  loginPromptText: "text-sm text-[#40545c]",

  loginPromptLink: "text-[#26718a] font-semibold hover:underline",

  animations: `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

    :root {
      --card-radius: 24px;
    }

    @keyframes gradient-anim {
      0% {
        background-position: 0% 50%;
      }

      50% {
        background-position: 100% 50%;
      }

      100% {
        background-position: 0% 50%;
      }
    }

    .animate-border {
      border-radius: var(--card-radius);
      padding: 2px;
      background: linear-gradient(
        90deg,
        #7ec8df,
        #5fb7a5,
        #a8d5ba
      );
      background-size: 200% 200%;
      animation: gradient-anim 6s ease infinite;
    }

    @keyframes float-slow {
      0% {
        transform: translateY(0px);
      }

      50% {
        transform: translateY(-18px);
      }

      100% {
        transform: translateY(0px);
      }
    }

    .animate-float-slow {
      animation: float-slow 8s ease-in-out infinite;
    }

    #signup-heading,
    form,
    input,
    button,
    a,
    p,
    label,
    span {
      font-family: 'Poppins', system-ui, -apple-system,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial;
    }

    @media(max-width:360px) {
      .rounded-3xl {
        border-radius: 14px;
      }
    }

    @media(min-width:1024px) {
      .rounded-3xl {
        border-radius: 24px;
      }
    }
  `,
};

export const sidebarStyles = {
  pageContainer:
    "min-h-screen bg-gradient-to-br from-[#f7f1e3] via-[#eaf6fb] to-[#edf7ef]",

  mobileOverlay: "fixed inset-0 bg-[#244b5a]/30 z-30 md:hidden",

  mainContainer: "flex xl:h-screen xl:overflow-y-hidden",

  sidebar:
    "fixed h-screen z-40 top-0 left-0 w-80 transform transition-transform duration-300 ease-in-out bg-[#fffdf8] shadow-lg rounded-r-2xl overflow-y-auto border-r border-[#dce8e5] md:relative md:translate-x-0 md:flex md:flex-col",

  sidebarHeader:
    "top-0 z-20 p-6 bg-gradient-to-r from-[#dff1f7] to-[#eaf5e9] text-[#40545c] relative overflow-hidden",

  headerDecoration1:
    "absolute top-0 right-0 w-32 h-32 -mt-16 -mr-16 bg-white opacity-20 rounded-full",

  headerDecoration2:
    "absolute bottom-0 left-0 w-24 h-24 -mb-12 -ml-12 bg-sky-200 opacity-40 rounded-full",

  headerContent:
    "flex font-[pacifico] items-center justify-between relative z-10",

  logoContainer: "flex items-center space-x-3",

  logoIcon: "p-2 bg-white/40 rounded-xl backdrop-blur-sm border border-white",

  logoTitle: "text-2xl font-bold",

  logoSubtitle: "mt-1 text-[#64747a] text-sm",

  closeButton: "md:hidden p-2 rounded-md hover:bg-white/50",

  sidebarContent: "sidebar-content flex-1 overflow-y-auto p-4",

  technologiesHeader: "mb-4 flex items-center justify-between",

  technologiesTitle: "text-lg font-semibold text-[#40545c]",

  technologiesCount:
    "text-xs bg-[#dff1f7] text-[#24506a] px-2 py-1 rounded-full",

  techItem: "mb-3",

  techButton:
    "w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 border",

  techButtonSelected: "border-current shadow-md transform scale-[1.02]",

  techButtonNormal:
    "border-[#dce8e5] hover:border-[#a9ccd6] hover:bg-[#f4fafb]",

  techButtonContent: "flex items-center space-x-3",

  techIcon: "p-2 rounded-lg border",

  techName: "font-medium",

  levelsContainer:
    "mt-3 ml-2 p-3 bg-[#f4fafb] rounded-xl border border-[#dce8e5]",

  levelsTitle: "text-sm font-medium text-[#40545c] mb-2 flex items-center",

  techBadge:
    "ml-2 text-xs bg-[#d5eaf1] text-[#24506a] px-2 py-0.5 rounded-full",

  levelButton:
    "w-full flex items-center justify-between cursor-pointer p-3 my-2 rounded-lg border transition-all",

  levelButtonSelected: "border-current shadow-sm font-bold",

  levelButtonNormal: "border-[#dce8e5] hover:bg-[#fffdf8]",

  levelButtonContent: "flex items-center space-x-2",

  levelIcon: "p-1.5 rounded-md",

  levelQuestions: "text-xs bg-[#e7eee9] text-[#40545c] px-2 py-1 rounded-full",

  sidebarFooter:
    "sticky bottom-0 z-20 p-4 border-t border-[#dce8e5] bg-[#fffdf8]",

  footerContent: "flex items-center justify-center text-[#64747a]",

  footerContentCenter: "text-center text-xs",

  footerHighlight: "mt-1 text-[#26718a] font-medium",

  mainContent: "flex-1 min-h-screen p-4 md:p-8 ml-0 md:ml-0",

  mobileHeader: "flex items-center justify-between mb-4 md:hidden",

  menuButton: "p-2 rounded-md bg-[#fffdf8] shadow-sm",

  mobileTitle: "flex-1 mx-3",

  mobileTechInfo: "flex items-center font-[pacifico] justify-center space-x-3",

  mobileTechIcon: "p-2 rounded-md border",

  mobileTechText: "text-center",

  mobileTechName: "text-sm font-semibold",

  mobileTechLevel: "text-xs text-[#64747a]",

  mobilePlaceholder: "text-center text-sm text-[#64747a]",

  mobileLevels: "md:hidden mb-4",

  mobileLevelsContainer: "flex gap-2 overflow-x-auto",

  mobileLevelButton:
    "flex-none px-4 py-2 rounded-xl border border-[#dce8e5] bg-[#fffdf8] shadow-sm text-sm font-medium",

  welcomeContainer:
    "h-full xl:pt-[300px] font-[pacifico] lg:pb-[360px] flex items-center justify-center",

  welcomeContent:
    "text-center font-[pacifico] max-w-2xl mx-auto bg-[#fffdf8]/90 backdrop-blur-sm p-6 md:p-10 rounded-2xl shadow-lg border border-[#e5eee9]",

  welcomeIcon:
    "inline-flex items-center justify-center p-4 bg-gradient-to-r from-[#dff1f7] to-[#eaf5e9] rounded-full shadow mb-6",

  welcomeTitle:
    "text-2xl md:text-4xl font-bold text-[#40545c] mb-4 font-[pacifico]",

  welcomeDescription: "text-sm md:text-lg text-[#64747a] mb-6 max-w-md mx-auto",

  featuresGrid:
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6",

  featureCard:
    "bg-gradient-to-br from-[#f0f8fa] to-[#eef7f0] p-4 md:p-5 rounded-2xl border border-[#dce8e5] text-center",

  featureIcon:
    "inline-flex items-center justify-center p-3 bg-[#e2f1e6] text-[#39805b] rounded-full mb-3",

  featureTitle: "font-semibold text-[#40545c] mb-2",

  featureDescription: "text-xs md:text-sm text-[#64747a]",

  welcomePrompt:
    "bg-gradient-to-r from-[#dff1f7] to-[#eaf5e9] p-3 md:p-4 rounded-2xl border border-[#c9e2e8]",

  welcomePromptText:
    "text-[#26718a] font-medium flex items-center justify-center",

  levelSelectionContainer:
    "h-full xl:mt-[240px] md:pb-[800px] pb-30 flex items-center justify-center",

  levelSelectionContent:
    "text-center bg-[#fffdf8] p-6 md:p-10 rounded-2xl shadow-lg border border-[#dce8e5] max-w-md",

  techSelectionIcon: "p-5 rounded-2xl inline-flex mb-6 shadow-sm",

  techSelectionTitle: "text-2xl md:text-3xl font-bold text-[#40545c] mb-2",

  techSelectionDescription: "text-[#64747a] mb-6",

  techSelectionPrompt:
    "bg-gradient-to-r from-[#dff1f7] to-[#eaf5e9] p-4 rounded-xl border border-[#c9e2e8]",

  techSelectionPromptText: "text-[#26718a] font-medium",

  resultsContainer:
    "h-full lg:pb-[560px] xl:pb-0 md:pb-[360px] flex items-center justify-center",

  resultsContent:
    "bg-[#fffdf8] p-6 md:p-10 rounded-2xl shadow-lg border border-[#dce8e5] max-w-2xl w-full",

  resultsHeader: "text-center",

  performanceIcon: "p-4 rounded-2xl inline-flex mb-6 shadow-sm",

  resultsTitle:
    "text-2xl md:text-4xl font-bold text-[#40545c] mb-2 font-[pacifico]",

  resultsSubtitle: "text-[#64747a] mb-2",

  performanceBadge:
    "inline-block text-[#40545c] px-4 py-1 rounded-full text-sm font-medium mb-6",

  scoreGrid: "grid grid-cols-2 gap-4 mb-6",

  scoreCard:
    "bg-gradient-to-br from-[#edf7ef] to-[#e2f1e6] p-4 rounded-2xl border border-[#cce5d3] text-center",

  scoreIcon:
    "inline-flex items-center justify-center w-12 h-12 bg-[#dcefe3] text-[#39805b] rounded-full mb-3 shadow-inner",

  scoreNumber: "text-2xl font-bold text-[#39805b]",

  scoreLabel: "text-[#42745b] font-medium",

  scoreProgress:
    "bg-gradient-to-r from-[#edf7ef] to-[#eaf6fb] p-4 rounded-2xl border border-[#dce8e5] mb-6",

  scoreProgressHeader: "flex items-center justify-between mb-4",

  scoreProgressTitle: "text-[#26718a] font-semibold",

  scoreProgressPercentage: "text-[#26718a] font-bold",

  scoreProgressBar: "w-full bg-[#e4ece9] rounded-full h-4",

  scoreProgressFill: "h-4 rounded-full transition-all duration-500",

  quizContainer: "max-w-3xl mx-auto",

  quizHeader:
    "mb-4 bg-[#fffdf8] p-4 md:p-6 rounded-2xl shadow-md border border-[#dce8e5]",

  quizTitleContainer: "flex items-center justify-between mb-2",

  quizTitle: "text-xl md:text-2xl font-bold text-[#40545c]",

  quizCounter:
    "text-sm bg-[#dff1f7] text-[#24506a] px-3 py-1 rounded-full font-medium",

  progressBar: "w-full bg-[#e4ece9] rounded-full h-2.5 mb-2",

  progressFill:
    "bg-gradient-to-r from-[#8fcfe2] to-[#86c9a0] h-2.5 rounded-full transition-all duration-500",

  questionContainer:
    "bg-[#fffdf8] p-6 md:p-8 rounded-2xl shadow-lg border border-[#dce8e5]",

  questionHeader: "flex items-center mb-2",

  questionIcon: "bg-[#dff1f7] text-[#26718a] p-2 rounded-lg mr-3",

  questionText: "text-lg md:text-xl font-semibold text-[#40545c]",

  optionsContainer: "space-y-4 mt-6",

  optionButton:
    "w-full cursor-pointer text-left p-4 md:p-5 rounded-2xl border-2 transition-all duration-300",

  optionNormal:
    "border-[#dce8e5] hover:border-[#9ecfdb] hover:bg-[#f4fafb] hover:shadow-sm",

  optionCorrect: "bg-[#edf7ef] border-[#a9d6b6] text-[#39805b] shadow-sm",

  optionIncorrect: "bg-[#fff1ef] border-[#efb8ae] text-[#a04c43] shadow-sm",

  optionContent: "flex items-center",

  optionIconCorrect: "mr-3 text-[#4f9b6b] flex-shrink-0",

  optionIconIncorrect: "mr-3 text-[#d16b5f] flex-shrink-0",

  optionIconEmpty:
    "w-5 h-5 rounded-full border-2 border-[#dce8e5] mr-3 flex-shrink-0",

  optionText: "text-sm md:text-lg",

  loadingContainer: "h-full flex items-center justify-center",

  loadingContent:
    "text-center bg-[#fffdf8] p-6 md:p-10 rounded-2xl shadow-lg border border-[#dce8e5]",

  loadingSpinner:
    "animate-spin rounded-full h-12 w-12 border-b-2 border-[#6fb8ca] mx-auto mb-4",

  loadingTitle: "text-lg md:text-xl font-semibold text-[#40545c] mb-2",

  loadingDescription: "text-sm md:text-base text-[#64747a]",

  customStyles: `
    .sidebar-content {
      -webkit-overflow-scrolling: touch;
    }

    aside .sidebar-content::-webkit-scrollbar {
      width: 10px;
    }

    aside .sidebar-content::-webkit-scrollbar-track {
      background: transparent;
    }

    aside .sidebar-content::-webkit-scrollbar-thumb {
      background-color: rgba(95,183,165,0.18);
      border-radius: 999px;
      border: 2px solid transparent;
      background-clip: padding-box;
    }

    aside .sidebar-content::-webkit-scrollbar-thumb:hover {
      background-color: rgba(95,183,165,0.30);
    }

    aside .sidebar-content {
      scrollbar-width: thin;
      scrollbar-color: rgba(95,183,165,0.18) transparent;
    }
  `,
};

export const resultStyles = {
  pageContainer:
    "min-h-screen bg-gradient-to-br from-[#f7f1e3] via-[#eaf6fb] to-[#edf7ef] p-6",

  container: "max-w-6xl font-[pacifico] mx-auto",

  header:
    "mb-6 flex flex-col md:flex-row md:items-start md:justify-between gap-4",

  title: "text-2xl md:text-3xl lg:text-2xl font-semibold text-[#40545c]",

  headerControls: "flex items-center gap-3",

  filterContainer: "mb-4",

  filterContent: "flex items-center justify-between gap-3",

  filterButtons: "flex flex-wrap items-center gap-2",

  filterLabel: "text-sm text-[#64747a] mr-2",

  filterButton:
    "px-3 py-1 rounded-full text-sm font-medium border shadow-sm focus:outline-none",

  filterButtonActive: "bg-[#5faebf] text-white border-[#5faebf]",

  filterButtonInactive: "bg-[#fffdf8] text-[#40545c] border-[#dce8e5]",

  filterStatus: "text-sm text-[#718187]",

  loadingContainer: "text-center py-20",

  loadingSpinner:
    "inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#6fb8ca] mb-4",

  loadingText: "text-[#64747a]",

  trackSection: "mb-6",

  trackTitle: "text-lg md:text-xl lg:text-lg font-semibold mb-3 text-[#40545c]",

  resultsGrid:
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-4",

  emptyState: "text-center py-12 text-[#64747a]",

  badgeExcellent:
    "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#dcefe3] text-[#39805b]",

  badgeGood:
    "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#dff1f7] text-[#26718a]",

  badgeAverage:
    "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#f7ead0] text-[#92713d]",

  badgeNeedsWork:
    "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#fff1ef] text-[#a04c43]",

  card: "relative bg-[#fffdf8] rounded-lg shadow-sm overflow-hidden border border-[#dce8e5] hover:shadow-md transition",

  cardAccent:
    "absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#72bdd0] to-[#4f9b91]",

  cardContent: "p-4 md:p-5 lg:p-4 flex flex-col h-full",

  cardHeader: "flex items-start justify-between gap-3",

  cardInfo: "flex items-center gap-3 min-w-0",

  levelAvatar:
    "flex items-center justify-center w-12 h-12 md:w-14 md:h-14 lg:w-12 lg:h-12 rounded-md font-semibold text-lg md:text-xl lg:text-lg",

  levelBasic: "bg-[#eaf6fb] text-[#26718a]",

  levelIntermediate: "bg-[#eaf5e9] text-[#42745b]",

  levelAdvanced: "bg-[#f7eadf] text-[#9a654e]",

  cardText: "min-w-0",

  cardTitle:
    "text-sm md:text-base lg:text-sm font-medium truncate text-[#40545c]",

  cardMeta: "text-xs md:text-sm lg:text-xs text-[#718187]",

  cardPerformance: "text-right",

  performanceLabel: "text-md md:text-md lg:text-md text-[#718187]",

  badgeContainer: "mt-1",

  cardStats: "mt-4",

  statItem: "text-md md:text-md lg:text-md text-[#64747a]",

  statNumber: "font-semibold text-lg md:text-xl lg:text-lg text-[#40545c]",
};
