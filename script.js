// Dados Reais do BPCHOQUE PMPR
const especialidades = [
    {
        titulo: "CDC - Controle de Distúrbios",
        desc: "Atuação primária em manifestações e eventos de grande porte, visando a preservação da ordem pública.",
        img: "https://www.pmpr.pr.gov.br/sites/default/files/styles/conteudo_600/public/imagem/2019-05/choque_pmpr_0.jpg"
    },
    {
        titulo: "COE - Operações Especiais",
        desc: "Unidade de elite para situações de altíssimo risco, como ocorrências com reféns e ambientes hostis.",
        img: "https://www.pmpr.pr.gov.br/sites/default/files/styles/conteudo_600/public/imagem/2021-02/coe_pmpr.jpg"
    },
    {
        titulo: "Canil - K9",
        desc: "Emprego de cães treinados para detecção de entorpecentes, explosivos e busca de pessoas.",
        img: "https://www.pmpr.pr.gov.br/sites/default/files/styles/conteudo_600/public/imagem/2020-08/canil_pmpr.jpg"
    }
];

const missoes = [
    { area: "Copa do Mundo 2014", detalhe: "Planejamento e execução da segurança tática no eixo Curitiba durante o evento mundial." },
    { area: "Intervenções Prisionais", detalhe: "Apoio ao DEPEN na retomada de ordem em unidades prisionais de segurança máxima." },
    { area: "Patrulhamento Tático", detalhe: "Ações de saturação em áreas críticas para redução de índices criminais (Homicídios/Tráfico)." }
];

// Funções de Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderCards();
    renderAccordion();
    initScrollReveal();
    
    // Loader Removal
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);
    }, 1500);
});
