/**
 * ============================================================================
 * CONFIGURAÇÃO CENTRALIZADA — MOURA ACADEMY
 * Altere aqui o número oficial de WhatsApp, links externos, imagens reais
 * e depoimentos autorizados sem precisar editar o HTML.
 * ============================================================================
 */
const ACADEMY_CONFIG = {
  // Configure o número oficial da Moura Academy no formato internacional (55 + DDD + Número)
  whatsappNumber: "5563999999999",
  whatsappDisplay: "(63) 99999-9999",

  // Redes Sociais e Localização
  instagramUrl: "https://instagram.com/moura.martelinho",
  instagramHandle: "@moura.martelinho",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Araguaina+Tocantins+Brasil",

  // Mensagens Contextuais de WhatsApp
  whatsappMessages: {
    geral:
      "Olá! Conheci a Moura Academy pelo site e gostaria de saber mais sobre a formação em martelinho de ouro.",
    inscricao:
      "Olá! Tenho interesse em me inscrever na formação presencial da Moura Academy. Poderia me passar informações sobre as próximas turmas?",
    duvidas:
      "Olá! Gostaria de tirar algumas dúvidas sobre o curso de martelinho de ouro.",
  },

  // Caminhos das Fotografias Reais da Moura Academy
  assets: {
    heroTool: "assets/images/hero-ferramenta-moura.jpg",
    instructorPhoto: "assets/images/arthur-moura-professor.jpg",
    practiceTheory: "assets/images/pratica-teoria-oficina.jpg",
    practiceTools: "assets/images/pratica-ferramentas-iluminacao.jpg",
    practiceVehicles: "assets/images/pratica-veiculos-reais.jpg",
  },

  // Galeria de Trabalhos Reais (Carrossel 3D Coverflow)
  gallery: [
    {
      image: "assets/images/trabalho-01.jpg",
      alt: "Reparo artesanal de amassado em porta sem pintura realizado pela Moura Martelinho",
      title: "Reparo em Painel Lateral",
      caption:
        "Nivelamento completo da chapa com preservação integral da pintura original de fábrica.",
    },
    {
      image: "assets/images/trabalho-02.jpg",
      alt: "Acabamento fino em para-lama automotivo com técnica de martelinho de ouro",
      title: "Acabamento em Para-lama",
      caption:
        "Leitura precisa na luminária profissional para devolução da linha original da peça.",
    },
    {
      image: "assets/images/trabalho-03.jpg",
      alt: "Recuperação de capô automotivo sem funilaria convencional",
      title: "Recuperação de Capô",
      caption: "Técnica de acesso controlado e controle de tensão metálica.",
    },
    {
      image: "assets/images/trabalho-04.jpg",
      alt: "Detalhamento de acabamento final em lataria automotiva",
      title: "Precisão em Vinco Automotivo",
      caption:
        "Reconstrução fiel de vinco estrutural sem necessidade de repintura.",
    },
  ],

  // Exemplos Reais de Antes e Depois (Sempre o mesmo reparo/veículo)
  comparisons: [
    {
      label: "Reparo 01 • Porta",
      title: "Amassado em Porta Automotiva",
      description:
        "Mesmo painel registrado antes e após o procedimento de martelinho de ouro.",
      beforeImage: "assets/images/antes_amassado1.png",
      afterImage: "assets/images/depois_amassado1.png",
    },
    {
      label: "Reparo 02 • Para-lama",
      title: "Deformação em Para-lama Dianteiro",
      description:
        "Restauração da geometria original sem uso de massa ou repintura.",
      beforeImage: "assets/images/antes_amassado2.png",
      afterImage: "assets/images/depois_amassado2.png",
    },
    {
      label: "Reparo 03 • Capô",
      title: "Impacto Localizado em Capô",
      description:
        "Nivelamento fino com controle óptico por iluminação profissional.",
      beforeImage: "assets/images/antes_amassado3.png",
      afterImage: "assets/images/depois_amassado3.png",
    },
  ],

  // Depoimentos Autorizados (Manter vazio [] até receber relatos reais autorizados)
  // Formato futuro: { name: 'Nome do Aluno', origin: 'Cidade - UF', quote: 'Relato...', photo: 'assets/images/aluno-01.jpg', videoUrl: '' }
  testimonials: [],

  // Perguntas Frequentes (Baseadas estritamente nas informações confirmadas)
  faqs: [
    {
      question: "Preciso entender de carros para fazer o curso?",
      answer:
        "Não. A formação da Moura Academy foi estruturada para ensinar desde os fundamentos básicos. O próprio professor Arthur Moura iniciou sua trajetória sem conhecimento prévio sobre automóveis.",
    },
    {
      question: "O curso é indicado para iniciantes?",
      answer:
        "Sim. O programa é totalmente indicado para iniciantes que desejam aprender uma nova profissão do absoluto zero, com didática acessível e acompanhamento próximo.",
    },
    {
      question: "Quantos dias dura a formação?",
      answer:
        "A formação tem duração de 7 dias intensivos, proporcionando tempo dedicado de prática e absorção técnica.",
    },
    {
      question: "O curso é presencial?",
      answer:
        "Sim. O aprendizado de martelinho de ouro exige prática manual, postura e leitura de iluminação ao vivo; por isso, toda a formação é realizada presencialmente.",
    },
    {
      question: "Onde acontecem as aulas?",
      answer:
        "As aulas presenciais acontecem na Moura Academy, em Araguaína – Tocantins. O endereço completo e orientações de chegada são enviados diretamente aos inscritos.",
    },
    {
      question: "As ferramentas estão incluídas?",
      answer:
        "Durante os 7 dias de curso, todas as ferramentas e equipamentos necessários para as aulas práticas são disponibilizados pela academia.",
    },
    {
      question: "Receberei certificado?",
      answer:
        "Sim. Ao concluir a formação presencial, o aluno recebe o certificado de conclusão emitido pela Moura Academy.",
    },
    {
      question: "Existe suporte depois do curso?",
      answer:
        "Sim. Os alunos contam com suporte vitalício diretamente com Arthur Moura para tirar dúvidas técnicas após a conclusão da formação.",
    },
    {
      question: "Como faço para garantir minha vaga?",
      answer:
        'Basta clicar em "Quero Me Inscrever" para preencher o formulário de interesse ou falar diretamente com nossa equipe pelo WhatsApp para receber as orientações de inscrição.',
    },
    {
      question: "Como obtenho informações sobre as próximas turmas?",
      answer:
        "As datas das próximas turmas são informadas diretamente pelo nosso atendimento oficial no WhatsApp. Entre em contato para consultar a disponibilidade atual.",
    },
  ],
};

function academyApp() {
  return {
    config: ACADEMY_CONFIG,
    assets: ACADEMY_CONFIG.assets,
    galleryItems: ACADEMY_CONFIG.gallery,
    comparisons: ACADEMY_CONFIG.comparisons,
    testimonials: ACADEMY_CONFIG.testimonials,
    faqs: ACADEMY_CONFIG.faqs,

    // Estado de UI
    scrolled: false,
    mobileMenuOpen: false,
    enrollModalOpen: false,
    privacyModalOpen: false,
    enrollOrigin: "Site",

    // Carrossel 3D Coverflow
    galleryIndex: 0,
    autoplayTimer: null,
    autoplayPaused: false,
    touchStartX: 0,

    // Comparador Antes e Depois
    activeComparison: 0,
    sliderPos: 50,
    isSliding: false,

    // FAQ Accordion
    activeFaq: 0,

    // Formulário de Interesse
    formData: {
      name: "",
      whatsapp: "",
      email: "",
      cityState: "",
      experience: "Não",
      notes: "",
      lgpdConsent: false,
    },
    formErrors: {},
    formStatus: "idle", // 'idle' | 'submitting' | 'success' | 'error'
    generatedLeadWhatsAppUrl: "",

    init() {
      // Monitorar rolagem para o Header dinâmico
      window.addEventListener(
        "scroll",
        () => {
          this.scrolled = window.scrollY > 40;
        },
        { passive: true },
      );

      // Fechar modais com tecla ESC
      window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          this.enrollModalOpen = false;
          this.privacyModalOpen = false;
          this.mobileMenuOpen = false;
        }
      });

      // Iniciar eventos do comparador Antes/Depois
      this.initComparisonDrag();

      // Iniciar autoplay do Carrossel 3D
      this.startAutoplay();

      // Iniciar animações suaves de entrada (Intersection Observer)
      this.initScrollReveal();
    },

    // =====================================================================
    // WHATSAPP CONTEXTUAL
    // =====================================================================
    getWhatsAppUrl(context = "geral") {
      const phone = this.config.whatsappNumber.replace(/\D/g, "");
      const text =
        this.config.whatsappMessages[context] ||
        this.config.whatsappMessages.geral;
      return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    },

    // =====================================================================
    // CARROSSEL 3D COVERFLOW
    // =====================================================================
    startAutoplay() {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (prefersReduced) return;

      this.autoplayTimer = setInterval(() => {
        if (!this.autoplayPaused && !this.enrollModalOpen) {
          this.nextSlide();
        }
      }, 6000);
    },

    pauseAutoplay() {
      this.autoplayPaused = true;
    },

    resumeAutoplay() {
      this.autoplayPaused = false;
    },

    nextSlide() {
      const total = this.galleryItems.length;
      this.galleryIndex = (this.galleryIndex + 1) % total;
    },

    prevSlide() {
      const total = this.galleryItems.length;
      this.galleryIndex = (this.galleryIndex - 1 + total) % total;
    },

    goToSlide(index) {
      this.galleryIndex = index;
    },

    getCarouselCardClass(index) {
      const total = this.galleryItems.length;
      const diff = (index - this.galleryIndex + total) % total;
      if (diff === 0) return "card-active";
      if (diff === 1) return "card-right";
      if (diff === total - 1) return "card-left";
      return "card-hidden";
    },

    handleCarouselTouchStart(e) {
      this.pauseAutoplay();
      if (e.touches && e.touches.length > 0) {
        this.touchStartX = e.touches[0].clientX;
      }
    },

    handleCarouselTouchEnd(e) {
      if (e.changedTouches && e.changedTouches.length > 0) {
        const deltaX = e.changedTouches[0].clientX - this.touchStartX;
        if (Math.abs(deltaX) > 45) {
          if (deltaX < 0) this.nextSlide();
          else this.prevSlide();
        }
      }
      this.resumeAutoplay();
    },

    // =====================================================================
    // COMPARADOR ANTES E DEPOIS
    // =====================================================================
    selectComparison(index) {
      this.activeComparison = index;
      this.sliderPos = 50;
    },

    initComparisonDrag() {
      const updatePosition = (clientX) => {
        const container = document.getElementById("before-after-container");
        if (!container) return;
        const rect = container.getBoundingClientRect();
        let pct = ((clientX - rect.left) / rect.width) * 100;
        pct = Math.max(2, Math.min(98, pct));
        this.sliderPos = Number(pct.toFixed(2));
      };

      window.addEventListener("mousemove", (e) => {
        if (this.isSliding) updatePosition(e.clientX);
      });

      window.addEventListener(
        "touchmove",
        (e) => {
          if (this.isSliding && e.touches.length > 0) {
            updatePosition(e.touches[0].clientX);
          }
        },
        { passive: true },
      );

      window.addEventListener("mouseup", () => {
        this.isSliding = false;
      });
      window.addEventListener("touchend", () => {
        this.isSliding = false;
      });
    },

    startSliding(e) {
      this.isSliding = true;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const container = document.getElementById("before-after-container");
      if (container) {
        const rect = container.getBoundingClientRect();
        let pct = ((clientX - rect.left) / rect.width) * 100;
        this.sliderPos = Number(Math.max(2, Math.min(98, pct)).toFixed(2));
      }
    },

    // =====================================================================
    // FAQ ACCORDION
    // =====================================================================
    toggleFaq(index) {
      this.activeFaq = this.activeFaq === index ? null : index;
    },

    // =====================================================================
    // MODAL E FORMULÁRIO DE INTERESSE
    // =====================================================================
    openEnrollModal(origin = "Site") {
      this.enrollOrigin = origin;
      this.enrollModalOpen = true;
    },

    closeEnrollModal() {
      this.enrollModalOpen = false;
    },

    formatPhoneInput() {
      let digits = this.formData.whatsapp.replace(/\D/g, "").slice(0, 11);
      if (digits.length > 6) {
        this.formData.whatsapp = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
      } else if (digits.length > 2) {
        this.formData.whatsapp = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
      } else if (digits.length > 0) {
        this.formData.whatsapp = `(${digits}`;
      }
    },

    validateForm() {
      const errors = {};
      if (!this.formData.name || this.formData.name.length < 3) {
        errors.name = "Por favor, informe seu nome completo.";
      }

      const phoneDigits = this.formData.whatsapp.replace(/\D/g, "");
      if (phoneDigits.length < 10) {
        errors.whatsapp = "Informe um número de WhatsApp válido com DDD.";
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.formData.email || !emailRegex.test(this.formData.email)) {
        errors.email = "Informe um endereço de e-mail válido.";
      }

      if (!this.formData.cityState || this.formData.cityState.length < 3) {
        errors.cityState = "Informe sua cidade e estado.";
      }

      if (!this.formData.lgpdConsent) {
        errors.lgpdConsent =
          "É necessário concordar com o aviso de privacidade para prosseguir.";
      }

      this.formErrors = errors;
      return Object.keys(errors).length === 0;
    },

    submitInterestForm() {
      if (!this.validateForm()) return;

      this.formStatus = "submitting";

      try {
        const phone = this.config.whatsappNumber.replace(/\D/g, "");
        const message = [
          "Olá! Tenho interesse na formação presencial da *Moura Academy* (7 dias intensivos).",
          "",
          "*DADOS DO INTERESSADO:*",
          `• *Nome:* ${this.formData.name}`,
          `• *WhatsApp:* ${this.formData.whatsapp}`,
          `• *E-mail:* ${this.formData.email}`,
          `• *Cidade/Estado:* ${this.formData.cityState}`,
          `• *Já trabalha com martelinho de ouro?* ${this.formData.experience}`,
          this.formData.notes ? `• *Mensagem:* ${this.formData.notes}` : null,
        ]
          .filter(Boolean)
          .join("\n");

        this.generatedLeadWhatsAppUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        setTimeout(() => {
          this.formStatus = "success";
        }, 350);
      } catch (err) {
        this.formStatus = "error";
      }
    },

    resetForm() {
      this.formStatus = "idle";
      this.formErrors = {};
    },

    // =====================================================================
    // ANIMAÇÕES COM INTERSECTION OBSERVER
    // =====================================================================
    initScrollReveal() {
      const elements = document.querySelectorAll(".reveal-up");
      if (!("IntersectionObserver" in window)) {
        elements.forEach((el) => el.classList.add("is-visible"));
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 },
      );

      elements.forEach((el) => observer.observe(el));
    },
  };
}
