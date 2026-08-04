/**
 * SanGa – Simulador Maestro · app.js
 * GAD Municipal de Montúfar · 2026
 */

// ═══════════════════════════════════════════════════
// 1. BASES DE DATOS SIMULADAS
// ═══════════════════════════════════════════════════

const DB = {
    usuario: { nombre: 'Juan', apellido: 'Ciudadano', cedula: '0401234567', correo: 'juan.ciudadano@gmail.com' },

    tramites: [
        { id: 'TRM-2026-081', tipo: 'Permiso de Construcción', fecha: '28/07/2026', estado: 'Aprobado', badge: 'badge-success' },
        { id: 'TRM-2026-082', tipo: 'Certificado de Avalúos', fecha: '01/08/2026', estado: 'En Revisión', badge: 'badge-blue' },
        { id: 'TRM-2026-079', tipo: 'Patente Municipal', fecha: '15/07/2026', estado: 'Finalizado', badge: 'badge-success' }
    ],

    pagos: [
        { id: 'PAG-101', categoria: 'predial', tipo: 'Impuesto Predial Urbano', cuenta: 'Predio N.° 04-01-55-12', monto: 32.50, vence: '30/08/2026', icono: 'fa-house' },
        { id: 'PAG-102', categoria: 'agua', tipo: 'Servicio de Agua Potable', cuenta: 'Medidor N.° 99821', monto: 13.00, vence: '15/08/2026', icono: 'fa-faucet-drip' },
        { id: 'PAG-103', categoria: 'patente', tipo: 'Patente Comercial 2026', cuenta: 'RUC 0401234567001', monto: 45.00, vence: '30/09/2026', icono: 'fa-store' },
        { id: 'PAG-104', categoria: 'tasa', tipo: 'Tasa de Recolección', cuenta: 'Contribuyente 1189', monto: 8.50, vence: '31/08/2026', icono: 'fa-trash-can' },
        { id: 'PAG-105', categoria: 'multa', tipo: 'Multa por Infracción', cuenta: 'Acta N.° 2026-440', monto: 22.00, vence: '10/08/2026', icono: 'fa-gavel' }
    ],

    reportes: [
        { id: 'REP-1024', cat: 'Luminaria Dañada', ubi: 'Barrio San José, calle 10 de Agosto', fecha: '25/07/2026', estado: 'Atendido', badge: 'badge-success', prioridad: 'Media' },
        { id: 'REP-1019', cat: 'Bache en vía pública', ubi: 'Av. Montúfar frente a la escuela', fecha: '18/07/2026', estado: 'En proceso', badge: 'badge-blue', prioridad: 'Alta' }
    ],

    rural: [
        {
            img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=600&q=80',
            titulo: 'Mantenimiento Vial', icono: 'fa-road', categoria: 'Infraestructura',
            desc: 'Cronograma actualizado de maquinaria pesada para el mantenimiento de vías rurales en las parroquias de Montúfar.',
            detalle: 'La Unidad de Obras Públicas mantiene un calendario mensual de intervención vial. Las parroquias de Fernández Salvador, Cristóbal Colón y Chitan de Navarrete son las próximas en recibir mantenimiento con maquinaria retroexcavadora y motoniveladora. Para registrar tu solicitud, comunícate con SanGa o acércate a las ventanillas del GAD.'
        },
        {
            img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80',
            titulo: 'Apoyo Agrícola', icono: 'fa-seedling', categoria: 'Productividad',
            desc: 'Distribución de semillas, fertilizantes e insumos agrícolas para los pequeños y medianos productores del cantón.',
            detalle: 'El GAD de Montúfar en coordinación con el MAGAP ofrece kits de semillas certificadas de papa, haba, cebolla y cebada. Los productores deben inscribirse con cédula, título de propiedad o contrato de arrendamiento. La próxima entrega se realizará el 20 de agosto en el centro agrícola de San Gabriel.'
        },
        {
            img: 'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&w=600&q=80',
            titulo: 'Brigadas Médicas', icono: 'fa-truck-medical', categoria: 'Salud',
            desc: 'Unidades móviles de salud con atención médica, odontológica y preventiva para comunidades alejadas del cantón.',
            detalle: 'Las brigadas médicas móviles visitan las comunidades rurales con servicios de medicina general, odontología preventiva, vacunación, control de presión arterial y entrega de medicamentos esenciales. El calendario de visitas se actualiza mensualmente. Consulta aquí las próximas fechas o pregúntale a SanGa.'
        },
        {
            img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80',
            titulo: 'Capacitaciones', icono: 'fa-chalkboard-user', categoria: 'Educación',
            desc: 'Talleres y cursos gratuitos en emprendimiento, computación, tejido y artesanías para la comunidad rural.',
            detalle: 'El Departamento de Desarrollo Humano del GAD dicta cursos gratuitos dirigidos a jóvenes y adultos de las comunidades rurales. Los temas incluyen: manejo de herramientas digitales, contabilidad básica para emprendedores, técnicas de bordado andino y conservación de alimentos. Inscripción gratuita a través de SanGa.'
        },
        {
            img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
            titulo: 'Ferias y Mercados', icono: 'fa-store', categoria: 'Economía',
            desc: 'Espacios para que los productores locales vendan directamente sus productos agrícolas y artesanales.',
            detalle: 'El GAD organiza ferias libres los viernes y sábados en la Plaza Colón de San Gabriel. Los productores interesados en participar deben registrarse con anticipación. El GAD facilita carpas, mesas y acceso a redes eléctricas sin costo para productores del cantón. Contacta a SanGa para inscribirte.'
        },
        {
            img: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=600&q=80',
            titulo: 'Programas Sociales', icono: 'fa-hands-holding-child', categoria: 'Social',
            desc: 'Apoyo a familias vulnerables, adultos mayores y personas con discapacidad en las parroquias rurales.',
            detalle: 'El GAD de Montúfar ejecuta el programa "Montúfar Solidario" que incluye: entrega de kits de víveres a familias vulnerables, acompañamiento a adultos mayores que viven solos, talleres de inclusión para personas con discapacidad y acceso a servicios municipales sin barreras. Regístrate en SanGa para acceder a estos beneficios.'
        }
    ],

    turismo: [
        {
            img: 'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?auto=format&fit=crop&w=600&q=80',
            titulo: 'Bosque de los Arrayanes', categoria: 'naturaleza',
            subtitulo: 'Reserva Natural · Bosque Andino',
            desc: 'Uno de los bosques de arrayán más extensos y mejor conservados del Ecuador. Sus árboles centenarios de corteza rojiza y tortuosas ramas crean un paisaje de cuento.',
            horario: 'Mar – Dom · 08:00 a 17:00',
            entrada: '$2.00 adultos · $1.00 niños',
            comoLlegar: 'A 4 km del centro de San Gabriel. Bus o taxi disponibles.',
            detalle: 'El Bosque de los Arrayanes de Montúfar es uno de los tesoros naturales más preciados del norte del Ecuador. Con más de 16 hectáreas cubiertas por arrayanes (Myrcianthes hallii), sus imponentes árboles de corteza naranja y ramas retorcidas conforman uno de los escenarios más fotogénicos de los Andes. Fue declarado Área Natural del Cantón en 1994. La mejor época para visitarlo es de junio a septiembre. Recomendamos llevar ropa abrigada, repelente y calzado impermeable.'
        },
        {
            img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80',
            titulo: 'Cascada de Paluz', categoria: 'naturaleza',
            subtitulo: 'Senderismo · Naturaleza',
            desc: 'Una majestuosa cascada de 50 metros rodeada de vegetación andina exuberante. Perfecta para senderismo y fotografía de paisaje.',
            horario: 'Todos los días · 07:00 a 18:00',
            entrada: 'Libre',
            comoLlegar: 'Vía a la parroquia La Paz, desviación señalizada.',
            detalle: 'La Cascada de Paluz es una de las caídas de agua más impresionantes del cantón Montúfar. Con una caída de aproximadamente 50 metros, el agua precipita sobre una pared rocosa cubierta de musgos y helechos, creando un ambiente de frescura y tranquilidad inigualables. El sendero de acceso tiene aproximadamente 2 km y es de dificultad moderada. Se recomienda ir acompañado de un guía local de la comunidad.'
        },
        {
            img: 'https://images.unsplash.com/photo-1548625361-ec853c063fb5?auto=format&fit=crop&w=600&q=80',
            titulo: 'Iglesia Matriz de San Gabriel', categoria: 'cultura',
            subtitulo: 'Patrimonio Histórico · Arquitectura',
            desc: 'Joya arquitectónica del barroco andino construida en el siglo XIX. Considerada una de las más hermosas del norte del Ecuador.',
            horario: 'Lun – Dom · 06:00 a 19:00',
            entrada: 'Libre',
            comoLlegar: 'Centro histórico de San Gabriel, Parque Colón.',
            detalle: 'La Iglesia Matriz de San Gabriel es el símbolo arquitectónico e histórico más emblemático del cantón Montúfar. Construida a finales del siglo XIX con influencias del barroco hispanoamericano, su fachada de piedra tallada y sus torres gemelas dominan el paisaje urbano de la ciudad. En su interior guarda valiosas imágenes religiosas del período colonial. Es Patrimonio Cultural del Estado Ecuatoriano desde 1994.'
        },
        {
            img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80',
            titulo: 'Gastronomía de Montúfar', categoria: 'gastronomia',
            subtitulo: 'Cocina Tradicional · Carnes y Tubérculos',
            desc: 'El cuy asado, el caldo de gallina de campo, las papas con cuero y el hornado montufareño son los platos bandera que enamoran a propios y extraños.',
            horario: 'Mercado central · 07:00 a 14:00',
            entrada: 'Libre',
            comoLlegar: 'Mercado Municipal, calle Bolívar y Pichincha.',
            detalle: 'La gastronomía de Montúfar es un reflejo de la riqueza cultural y agrícola del cantón. El cuy asado al carbón, acompañado de papas con ají y ensalada de col, es el plato más representativo. El hornado de chancho, preparado desde la madrugada, es otro favorito de los domingos. La chicha de jora y el jugo de caña son las bebidas tradicionales que completan una experiencia culinaria auténtica.'
        },
        {
            img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80',
            titulo: 'Laguna del Salado', categoria: 'naturaleza',
            subtitulo: 'Lago Andino · Pesca · Deportes',
            desc: 'Hermosa laguna de altura en los páramos del cantón, ideal para la pesca deportiva, canotaje y observación de aves.',
            horario: 'Siempre accesible',
            entrada: 'Libre',
            comoLlegar: 'Ruta Montúfar – Huaca, señalización vial.',
            detalle: 'La Laguna del sector es un espejo de agua cristalina enclavado en los páramos montufareños. Con una flora de almohadillas, paja de páramo y pequeños arbustos andinos, el ecosistema es frágil y hermoso. La laguna alberga truchas y es visitada por aves como el pato pinto, la garza blanca y el cóndor andino. Es punto de partida para caminatas de alta montaña y astronomía nocturna.'
        },
        {
            img: 'https://images.unsplash.com/photo-1504387432042-8aca549e4729?auto=format&fit=crop&w=600&q=80',
            titulo: 'Artesanías y Tejidos', categoria: 'cultura',
            subtitulo: 'Cultura · Tradición · Comercio Justo',
            desc: 'Las manos expertas de las artesanas de Montúfar producen ponchos, tapices, bolsos y accesorios de lana que exportan la cultura andina al mundo.',
            horario: 'Centro Artesanal · Lun – Sáb · 09:00 a 18:00',
            entrada: 'Libre',
            comoLlegar: 'Calle Sucre y Ricaurte, San Gabriel.',
            detalle: 'El cantón Montúfar tiene una tradición artesanal que se transmite de generación en generación. Las artesanas utilizan telares de palo para crear ponchos de lana de oveja con diseños geométricos andinos. Además se producen tapices, cojines, bolsos y accesorios bordados a mano. El GAD apoya a más de 40 artesanas del cantón con ferias locales e internacionales. Visita el Centro Artesanal para comprar directamente al productor.'
        }
    ],

    eventos: [
        {
            img: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=600&q=80',
            dia: '08', mes: 'SEP', titulo: 'Fiestas de Cantonización de Montúfar',
            lugar: 'Parque Central, San Gabriel',
            hora: '09:00 – 23:00',
            tipo: 'chip-blue', tipoNombre: 'Cultura',
            desc: 'Gran celebración del aniversario de cantonización con desfiles, elección de reina, feria gastronómica, exhibiciones artísticas y conciertos nocturnos.'
        },
        {
            img: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&q=80',
            dia: '15', mes: 'AGO', titulo: 'Feria Gastronómica del Cuy',
            lugar: 'Plaza Colón, San Gabriel',
            hora: '08:00 – 16:00',
            tipo: 'chip-orange', tipoNombre: 'Gastronomía',
            desc: 'La feria más sabrosa del cantón reúne a más de 30 restaurantes y familias que exhiben las mejores recetas de cuy asado, hornado y platos típicos de la sierra norte.'
        },
        {
            img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80',
            dia: '20', mes: 'AGO', titulo: 'Carrera Atlética "Ruta Montufareña"',
            lugar: 'Inicio: Parque Colón – Circuito urbano y rural',
            hora: '06:00',
            tipo: 'chip-green', tipoNombre: 'Deporte',
            desc: 'Competencia atlética de 10 km abierta a corredores de todas las edades. Recorre el corazón de San Gabriel y sus parajes naturales más emblemáticos.'
        },
        {
            img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80',
            dia: '05', mes: 'SEP', titulo: 'Sesión Solemne del Concejo Municipal',
            lugar: 'Salón de Sesiones · GAD Montúfar',
            hora: '10:00',
            tipo: 'chip-blue', tipoNombre: 'Institucional',
            desc: 'Sesión solemne de conmemoración de la cantonización. Rendición de cuentas del Alcalde y presentación de proyectos para el siguiente período.'
        },
        {
            img: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=600&q=80',
            dia: '25', mes: 'AGO', titulo: 'Expo Agropecuaria Montúfar 2026',
            lugar: 'Centro de Exposiciones Municipal',
            hora: '09:00 – 18:00',
            tipo: 'chip-green', tipoNombre: 'Agro',
            desc: 'Exposición de ganado de raza, productos agrícolas, maquinaria y tecnología del campo. Con concursos, conferencias y premiación al mejor productor del cantón.'
        },
        {
            img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
            dia: '10', mes: 'SEP', titulo: 'Festival de la Chicha y la Cultura',
            lugar: 'Parroquia Fernández Salvador',
            hora: '11:00 – 20:00',
            tipo: 'chip-orange', tipoNombre: 'Cultural',
            desc: 'Celebración de las tradiciones ancestrales con danzas folclóricas, música de banda, ritual de la chicha y exposición de vestimenta indígena del cantón.'
        }
    ],

    obras: [
        {
            img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
            titulo: 'Regeneración Urbana Parque Central',
            contratista: 'Constructora Andes S.A.', presupuesto: '$120,500',
            inicio: '01/03/2026', fin: '30/10/2026', avance: 65, color: 'var(--primary)',
            beneficiarios: '15,000 ciudadanos del área urbana',
            estado: 'En ejecución', badge: 'badge-blue'
        },
        {
            img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
            titulo: 'Asfaltado Vía Principal La Paz – Cristóbal Colón',
            contratista: 'Vialidad del Norte Cía. Ltda.', presupuesto: '$85,000',
            inicio: '15/05/2026', fin: '15/11/2026', avance: 30, color: 'var(--warning)',
            beneficiarios: '4,200 habitantes de las parroquias La Paz y Cristóbal Colón',
            estado: 'En ejecución', badge: 'badge-warning'
        },
        {
            img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=600&q=80',
            titulo: 'Sistema de Agua Potable Comunidad El Chamizo',
            contratista: 'Tecnagua Ecuador S.A.', presupuesto: '$64,000',
            inicio: '01/04/2026', fin: '31/08/2026', avance: 90, color: 'var(--accent)',
            beneficiarios: '620 familias de la comunidad',
            estado: 'Por concluir', badge: 'badge-success'
        }
    ]
};

// ═══════════════════════════════════════════════════
// 2. INICIALIZACIÓN Y ENRUTAMIENTO
// ═══════════════════════════════════════════════════

function loadDB() {
    const saved = localStorage.getItem('sangaDB');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            if (parsed.tramites) DB.tramites = parsed.tramites;
            if (parsed.pagos) DB.pagos = parsed.pagos;
            if (parsed.reportes) DB.reportes = parsed.reportes;
            if (parsed.usuario) DB.usuario = parsed.usuario;
        } catch (e) {
            console.error('Error loading DB', e);
        }
    }
}

function saveDB() {
    localStorage.setItem('sangaDB', JSON.stringify({
        tramites: DB.tramites,
        pagos: DB.pagos,
        reportes: DB.reportes,
        usuario: DB.usuario
    }));
}

document.addEventListener('DOMContentLoaded', () => {
    loadDB();
    // Login
    document.getElementById('form-login').addEventListener('submit', e => {
        e.preventDefault();
        doLogin();
    });

    // Navegación (todos los nav-btn con data-page)
    document.querySelectorAll('.nav-btn[data-page]').forEach(btn => {
        btn.addEventListener('click', () => {
            const p = btn.getAttribute('data-page');
            if (p) navToPage(p);
        });
    });

    // Chat Enter
    const ci = document.getElementById('chat-input');
    if (ci) ci.addEventListener('keypress', e => { if (e.key === 'Enter') sendMessage(); });

    // Fecha en hero
    const heroDate = document.getElementById('hero-date');
    if (heroDate) {
        const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        heroDate.textContent = new Date().toLocaleDateString('es-EC', opts);
    }
});

function doLogin() {
    showToast('Autenticación correcta. Bienvenido, ' + DB.usuario.nombre);
    switchView('view-citizen');
    renderAllModules();
}

function simulateBiometrics() {
    showToast('Verificando huella dactilar…', 'info');
    setTimeout(() => {
        showToast('Identidad verificada ✓');
        switchView('view-citizen');
        renderAllModules();
    }, 1600);
}

function switchView(id) {
    document.querySelectorAll('.app-view').forEach(v => { v.classList.remove('active'); });
    const v = document.getElementById(id);
    if (v) { v.classList.remove('d-none'); v.classList.add('active'); }
}

function navToPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-btn[data-page]').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-page') === pageId);
    });
    const page = document.getElementById(pageId);
    if (page) page.classList.add('active');

    const labels = {
        'page-dashboard': 'Inicio',
        'page-chat': 'SanGa Asistente',
        'page-tramites': 'Trámites Municipales',
        'page-pagos': 'Pagos en Línea',
        'page-reportes': 'Reportes Ciudadanos',
        'page-consultas': 'Buscador Municipal',
        'page-rural': 'SanGa Rural',
        'page-turismo': 'Turismo · Montúfar',
        'page-eventos': 'Eventos y Agenda',
        'page-transparencia': 'Municipio Transparente',
        'page-perfil': 'Mi Perfil'
    };
    const el = document.getElementById('topbar-title');
    if (el && labels[pageId]) el.textContent = labels[pageId];
}

function logout() {
    switchView('view-login');
    showToast('Sesión cerrada correctamente.', 'info');
}

function openProfile() { navToPage('page-perfil'); }

function toggleTheme() {
    const html = document.documentElement;
    html.setAttribute('data-theme', html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
}

// ═══════════════════════════════════════════════════
// 3. RENDER DE MÓDULOS
// ═══════════════════════════════════════════════════

function renderAllModules() {
    renderTramites();
    renderPagos();
    renderReportes();
    renderRural();
    renderTurismo('all');
    renderEventos();
    renderObras();
    updateProfileDisplay();
}

function updateProfileDisplay() {
    const u = DB.usuario;
    const initials = (u.nombre[0] + (u.apellido ? u.apellido[0] : '')).toUpperCase();
    const nameEl = document.getElementById('profile-name-display');
    const cedEl = document.getElementById('profile-cedula-display');
    const emEl = document.getElementById('profile-email-display');
    const avEl = document.getElementById('profile-avatar-display');
    const topAv = document.querySelector('.topbar-right .avatar-sm');
    const sbAv = document.getElementById('sb-avatar');
    const sbName = document.getElementById('sb-user-name');
    if (nameEl) nameEl.textContent = u.nombre + ' ' + (u.apellido || '');
    if (cedEl) cedEl.innerHTML = `<i class="fa-solid fa-id-card"></i> C.I. ${u.cedula}`;
    if (emEl) emEl.innerHTML = `<i class="fa-solid fa-envelope"></i> ${u.correo}`;
    if (avEl) avEl.textContent = initials;
    if (topAv) topAv.textContent = initials;
    if (sbAv) sbAv.textContent = initials;
    if (sbName) sbName.textContent = u.nombre + ' ' + (u.apellido || '');
}

function toggleSidebar() {
    const sb = document.querySelector('.shell-sidebar');
    if (sb) sb.classList.toggle('collapsed');
}



// ── TRÁMITES ──
function renderTramites() {
    const el = document.getElementById('tramites-list');
    if (!el) return;
    el.innerHTML = DB.tramites.map(t => `
        <div class="item-card">
            <div class="item-card-top">
                <div>
                    <div class="item-title">${t.tipo}</div>
                    <div class="item-meta"><i class="fa-solid fa-hashtag"></i>${t.id}</div>
                    <div class="item-meta"><i class="fa-regular fa-calendar"></i>${t.fecha}</div>
                </div>
                <span class="badge ${t.badge}">${t.estado}</span>
            </div>
            <div class="item-actions">
                <button class="btn btn-outline" style="font-size:0.82rem; padding:7px 12px;" onclick="showToast('Documentos del trámite ${t.id} descargados', 'info')"><i class="fa-solid fa-download"></i> Documentos</button>
                <button class="btn btn-primary" style="font-size:0.82rem; padding:7px 12px;" onclick="showToast('Trámite ${t.id}: ${t.estado}')"><i class="fa-solid fa-eye"></i> Ver Estado</button>
            </div>
        </div>
    `).join('');
}

// ── PAGOS ──
let pagosFiltro = 'all';
function filterPagos(cat) {
    pagosFiltro = cat;
    document.querySelectorAll('.pay-type-card').forEach(c => c.classList.remove('active-pay-type'));
    event.currentTarget.classList.add('active-pay-type');
    renderPagos();
}

function renderPagos() {
    const el = document.getElementById('pagos-list');
    if (!el) return;
    const lista = pagosFiltro === 'all' ? DB.pagos : DB.pagos.filter(p => p.categoria === pagosFiltro);
    if (lista.length === 0) {
        el.innerHTML = `<div class="item-card text-center"><i class="fa-solid fa-check-circle fa-2x" style="color:var(--accent); margin-bottom:10px;"></i><p>No tienes obligaciones pendientes en esta categoría.</p></div>`;
        return;
    }
    el.innerHTML = lista.map(p => `
        <div class="item-card">
            <div class="item-card-top">
                <div style="display:flex; align-items:center; gap:14px;">
                    <div class="sc-icon blue" style="flex-shrink:0;"><i class="fa-solid ${p.icono}"></i></div>
                    <div>
                        <div class="item-title">${p.tipo}</div>
                        <div class="item-meta"><i class="fa-solid fa-barcode"></i>${p.cuenta}</div>
                        <div class="item-meta"><i class="fa-regular fa-calendar-xmark"></i>Vence: ${p.vences || p.vence}</div>
                    </div>
                </div>
                <div style="text-align:right;">
                    <span class="badge badge-red">Pendiente</span>
                    <span class="amount-big">$${p.monto.toFixed(2)}</span>
                </div>
            </div>
            <div class="item-actions">
                <button class="btn btn-primary w-100" onclick="openPaymentModal('${p.id}', ${p.monto}, '${p.tipo}')"><i class="fa-solid fa-credit-card"></i> Pagar Ahora</button>
            </div>
        </div>
    `).join('');
}

// ── REPORTES ──
function renderReportes() {
    const el = document.getElementById('reportes-list');
    if (!el) return;
    el.innerHTML = DB.reportes.map(r => `
        <div class="item-card">
            <div class="item-card-top">
                <div>
                    <div class="item-title">${r.cat}</div>
                    <div class="item-meta"><i class="fa-solid fa-location-dot"></i>${r.ubi}</div>
                    <div class="item-meta"><i class="fa-regular fa-calendar"></i>${r.fecha} · Ticket: ${r.id}</div>
                    <div class="item-meta"><i class="fa-solid fa-flag"></i>Prioridad: ${r.prioridad}</div>
                </div>
                <span class="badge ${r.badge}">${r.estado}</span>
            </div>
            <div class="item-actions">
                <button class="btn btn-outline" style="font-size:0.82rem; padding:7px 12px;" onclick="showToast('Seguimiento del reporte ${r.id}', 'info')"><i class="fa-solid fa-location-crosshairs"></i> Seguimiento</button>
            </div>
        </div>
    `).join('');
}

// ── RURAL ──
function renderRural() {
    const el = document.getElementById('rural-list');
    if (!el) return;
    el.innerHTML = DB.rural.map((r, i) => `
        <div class="info-card" onclick="openDetalle('rural', ${i})">
            <img src="${r.img}" alt="${r.titulo}">
            <div class="info-card-body">
                <span class="chip chip-green" style="margin-bottom:8px; display:inline-block;">${r.categoria}</span>
                <h3>${r.titulo}</h3>
                <p>${r.desc}</p>
                <button class="btn btn-outline w-100" style="margin-top:6px; font-size:0.82rem;"><i class="fa-solid fa-info-circle"></i> Más información</button>
            </div>
        </div>
    `).join('');
}

// ── TURISMO ──
function filterTurismo(cat, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    renderTurismo(cat);
}

function renderTurismo(cat) {
    const el = document.getElementById('turismo-list');
    if (!el) return;
    const lista = cat === 'all' ? DB.turismo : DB.turismo.filter(t => t.categoria === cat);
    el.innerHTML = lista.map((t, i) => {
        const realI = DB.turismo.indexOf(t);
        return `
        <div class="info-card" onclick="openDetalle('turismo', ${realI})">
            <img src="${t.img}" alt="${t.titulo}">
            <div class="info-card-body">
                <span class="chip chip-blue" style="margin-bottom:8px; display:inline-block;">${t.subtitulo}</span>
                <h3>${t.titulo}</h3>
                <p>${t.desc}</p>
                <div class="info-card-meta">
                    <span class="chip chip-outline"><i class="fa-regular fa-clock"></i> ${t.horario}</span>
                    <span class="chip chip-outline"><i class="fa-solid fa-ticket"></i> ${t.entrada}</span>
                </div>
            </div>
        </div>
        `;
    }).join('');
}

// ── EVENTOS ──
function renderEventos() {
    const el = document.getElementById('eventos-list');
    if (!el) return;
    el.innerHTML = DB.eventos.map(ev => `
        <div class="evento-card">
            <div class="evento-img" style="background-image:url('${ev.img}')">
                <div class="evento-date-badge">
                    <strong>${ev.dia}</strong>${ev.mes}
                </div>
            </div>
            <div class="evento-body">
                <span class="chip ${ev.tipo}" style="margin-bottom:8px; display:inline-block;">${ev.tipoNombre}</span>
                <h3>${ev.titulo}</h3>
                <p>${ev.desc}</p>
                <div class="evento-info">
                    <span><i class="fa-solid fa-location-dot"></i>${ev.lugar}</span>
                    <span><i class="fa-regular fa-clock"></i>${ev.hora}</span>
                </div>
                <button class="btn btn-outline w-100 mt-3" style="font-size:0.82rem;" onclick="showToast('Recordatorio para ${ev.titulo} activado ✓')"><i class="fa-regular fa-bell"></i> Recordarme este evento</button>
            </div>
        </div>
    `).join('');
}

// ── OBRAS ──
function renderObras() {
    const el = document.getElementById('obras-list');
    if (!el) return;
    el.innerHTML = DB.obras.map(o => `
        <div class="item-card">
            <img src="${o.img}" alt="${o.titulo}" style="width:100%; height:150px; object-fit:cover; border-radius:6px; margin-bottom:14px;">
            <div class="item-card-top">
                <div>
                    <div class="item-title">${o.titulo}</div>
                    <div class="item-meta"><i class="fa-solid fa-hard-hat"></i>Contratista: ${o.contratista}</div>
                    <div class="item-meta"><i class="fa-solid fa-calendar-check"></i>${o.inicio} → ${o.fin}</div>
                    <div class="item-meta"><i class="fa-solid fa-users"></i>Beneficiarios: ${o.beneficiarios}</div>
                </div>
                <div style="text-align:right;">
                    <span class="badge ${o.badge}">${o.estado}</span>
                    <div style="font-size:1.4rem; font-weight:800; color:var(--primary); margin-top:4px;">${o.presupuesto}</div>
                </div>
            </div>
            <div style="margin-top:12px;">
                <div style="display:flex; justify-content:space-between; font-size:0.8rem; font-weight:600; margin-bottom:4px; color:var(--text-muted);">
                    <span>Avance de Obra</span><span>${o.avance}%</span>
                </div>
                <div class="progress-bar-wrap">
                    <div class="progress-bar" style="width:${o.avance}%; background:${o.color};"></div>
                </div>
            </div>
        </div>
    `).join('');
}

// ── DETALLE MODAL (Turismo / Rural) ──
function openDetalle(tipo, idx) {
    const data = tipo === 'turismo' ? DB.turismo[idx] : DB.rural[idx];
    document.getElementById('detalle-titulo').textContent = data.titulo;
    const content = document.getElementById('detalle-content');

    if (tipo === 'turismo') {
        content.innerHTML = `
            <img src="${data.img}" style="width:100%; height:200px; object-fit:cover; border-radius:var(--radius-sm); margin-bottom:16px;">
            <span class="chip chip-blue mb-2" style="display:inline-block;">${data.subtitulo}</span>
            <p style="margin:10px 0; line-height:1.7; font-size:0.92rem; color:var(--text-body);">${data.detalle}</p>
            <div style="background:var(--surface-alt); border-radius:var(--radius-sm); padding:14px; margin-top:14px;">
                <div class="item-meta mb-2"><i class="fa-regular fa-clock" style="color:var(--primary);"></i><strong> Horario:</strong> ${data.horario}</div>
                <div class="item-meta mb-2"><i class="fa-solid fa-ticket" style="color:var(--primary);"></i><strong> Entrada:</strong> ${data.entrada}</div>
                <div class="item-meta"><i class="fa-solid fa-route" style="color:var(--primary);"></i><strong> Cómo llegar:</strong> ${data.comoLlegar}</div>
            </div>
            <button class="btn btn-primary w-100 mt-3" onclick="showToast('Ruta a ${data.titulo} iniciada en el mapa', 'info'); closeModal('modal-detalle');">
                <i class="fa-solid fa-map-location-dot"></i> Ver en el Mapa
            </button>
        `;
    } else {
        content.innerHTML = `
            <img src="${data.img}" style="width:100%; height:180px; object-fit:cover; border-radius:var(--radius-sm); margin-bottom:16px;">
            <span class="chip chip-green mb-2" style="display:inline-block;">${data.categoria}</span>
            <p style="margin:10px 0; line-height:1.7; font-size:0.92rem; color:var(--text-body);">${data.detalle}</p>
            <button class="btn btn-primary w-100 mt-3" onclick="navToPage('page-chat'); closeModal('modal-detalle'); setTimeout(()=>{ document.getElementById('chat-input').value='Quiero información sobre ${data.titulo}'; sendMessage(); }, 300);">
                <i class="fa-solid fa-robot"></i> Consultar con SanGa
            </button>
        `;
    }
    openModal('modal-detalle');
}

// ═══════════════════════════════════════════════════
// 4. CONSULTAS
// ═══════════════════════════════════════════════════
function runConsulta() {
    const q = document.getElementById('consulta-input').value.trim();
    if (!q) return;
    runQuickConsulta(q);
}

function runQuickConsulta(query) {
    document.getElementById('consulta-input').value = query;
    const result = document.getElementById('consulta-result');
    result.classList.remove('d-none');
    result.innerHTML = `
        <h4 style="margin-bottom:12px;"><i class="fa-solid fa-circle-info" style="color:var(--primary);"></i> Resultados para: "<em>${query}</em>"</h4>
        <p style="font-size:0.9rem; color:var(--text-body); line-height:1.6;">
        Según nuestra base de datos, la información sobre <strong>${query}</strong> corresponde al departamento correspondiente del GAD Municipal de Montúfar.
        Para obtener el documento oficial, puede solicitarlo a través del módulo de <strong>Trámites</strong> o comunicarse con SanGa para orientación personalizada.
        </p>
        <div style="margin-top:14px; display:flex; gap:10px; flex-wrap:wrap;">
            <button class="btn btn-primary" onclick="navToPage('page-tramites'); document.getElementById('consulta-result').classList.add('d-none');"><i class="fa-solid fa-file-signature"></i> Ir a Trámites</button>
            <button class="btn btn-outline" onclick="navToPage('page-chat'); document.getElementById('consulta-result').classList.add('d-none');"><i class="fa-solid fa-robot"></i> Preguntar a SanGa</button>
        </div>
    `;
}

// ═══════════════════════════════════════════════════
// 5. CHAT – MOTOR IA SIMULADO
// ═══════════════════════════════════════════════════
function quickChat(text) {
    const ci = document.getElementById('chat-input');
    if (ci) ci.value = text;
    sendMessage();
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const text = input.value.trim();
    if (!text) return;
    appendMsg(text, 'user');
    input.value = '';
    showTyping();
    setTimeout(() => { removeTyping(); analyzeIntent(text.toLowerCase()); }, 900);
}

function appendMsg(html, sender) {
    const c = document.getElementById('chat-messages');
    const d = document.createElement('div');
    d.className = `msg-row ${sender}`;
    d.innerHTML = `<div class="msg-bubble">${html}</div>`;
    c.appendChild(d);
    c.scrollTop = c.scrollHeight;
}

let typingEl = null;
function showTyping() {
    const c = document.getElementById('chat-messages');
    typingEl = document.createElement('div');
    typingEl.className = 'msg-row bot';
    typingEl.innerHTML = `<div class="msg-bubble"><div class="typing-dots"><span></span><span></span><span></span></div></div>`;
    c.appendChild(typingEl);
    c.scrollTop = c.scrollHeight;
}
function removeTyping() { if (typingEl) { typingEl.remove(); typingEl = null; } }

// ── Contexto de sesión del chat ──
let chatCtx = { intent: null, selectedPago: null, reporteStep: null, reporteData: {} };

// ── Mostrar pagos pendientes como tarjetas interactivas en el chat ──
function chatShowPagos() {
    if (DB.pagos.length === 0) {
        appendMsg('<p>✅ ¡Excelente! No tienes obligaciones pendientes en este momento.</p>', 'bot');
        return;
    }
    const cards = DB.pagos.map(p => `
        <div class="chat-pay-card" onclick="chatSelectPago('${p.id}')">
            <div class="cpc-left">
                <div class="cpc-icon"><i class="fa-solid ${p.icono}"></i></div>
                <div class="cpc-info">
                    <div class="cpc-tipo">${p.tipo}</div>
                    <div class="cpc-vence"><i class="fa-regular fa-calendar-xmark"></i> Vence: ${p.vence}</div>
                </div>
            </div>
            <div class="cpc-monto">$${p.monto.toFixed(2)}</div>
        </div>
    `).join('');
    appendMsg(`<p>Aquí tienes tus <strong>${DB.pagos.length} obligaciones pendientes</strong>. Toca la que deseas pagar:</p><div class="chat-pay-list">${cards}</div>`, 'bot');
    chatCtx.intent = 'esperando-seleccion-pago';
}

function chatSelectPago(id) {
    const pago = DB.pagos.find(p => p.id === id);
    if (!pago) return;
    chatCtx.selectedPago = pago;
    chatCtx.intent = 'esperando-metodo-pago';
    appendMsg(`<p>Seleccionaste: <strong>${pago.tipo}</strong> · <strong style="color:var(--accent)">$${pago.monto.toFixed(2)}</strong></p>
        <p>¿Cómo deseas pagar?</p>
        <div class="chat-pay-methods">
            <button class="chat-pay-method-btn" onclick="chatExecutePayment('card')">
                <i class="fa-solid fa-credit-card"></i> Tarjeta
            </button>
            <button class="chat-pay-method-btn" onclick="chatHandleTransferInfo()">
                <i class="fa-solid fa-building-columns"></i> Transferencia
            </button>
        </div>`, 'bot');
}

function chatExecutePayment(method) {
    const p = chatCtx.selectedPago;
    if (!p) return;
    appendMsg(`<p>Procesando pago de <strong>$${p.monto.toFixed(2)}</strong>...</p>`, 'bot');
    showTyping();
    setTimeout(() => {
        removeTyping();
        DB.pagos = DB.pagos.filter(x => x.id !== p.id);
        saveDB();
        renderPagos();
        const num = `REC-${new Date().getFullYear()}-${Math.floor(Math.random() * 90000 + 10000)}`;
        appendMsg(`
            <p>✅ <strong>¡Pago procesado con éxito!</strong></p>
            <div style="background:var(--accent-ultra); border:1px solid rgba(15,152,112,0.2); border-radius:var(--r-sm); padding:12px; margin-top:8px; font-size:0.84rem;">
                <p style="margin-bottom:4px;"><strong>📌 Concepto:</strong> ${p.tipo}</p>
                <p style="margin-bottom:4px;"><strong>💰 Monto:</strong> $${p.monto.toFixed(2)}</p>
                <p style="margin-bottom:4px;"><strong>🧾 Método:</strong> ${method === 'card' ? 'Tarjeta' : 'Transferencia'}</p>
                <p><strong>🧲 Comprobante:</strong> ${num}</p>
            </div>
            <div class="chat-validated-badge"><i class="fa-solid fa-circle-check"></i> Pago Validado</div>
        `, 'bot');
        chatCtx = { intent: null, selectedPago: null, reporteStep: null, reporteData: {} };
        showToast(`Pago de $${p.monto.toFixed(2)} procesado desde SanGa IA`);
    }, 1800);
}

function chatHandleTransferInfo() {
    const p = chatCtx.selectedPago;
    if (!p) return;
    chatCtx.intent = 'esperando-comprobante-transferencia';
    appendMsg(`
        <p>Para pagar por transferencia, usa los siguientes datos bancarios:</p>
        <div style="background:var(--surface-2); border-radius:var(--r-sm); padding:12px; margin-top:8px; font-size:0.84rem;">
            <p><strong>Banco:</strong> Banco del Pacífico</p>
            <p><strong>Cuenta corriente:</strong> 0046002204</p>
            <p><strong>Titular:</strong> GAD Municip. Montúfar</p>
            <p><strong>RUC:</strong> 0460000120001</p>
            <p><strong>Concepto:</strong> ${p.tipo} · $${p.monto.toFixed(2)}</p>
        </div>
        <p style="margin-top:10px;">Luego de realizar la transferencia, toca el <strong>📎 clip</strong> para adjuntar el comprobante y lo valido automáticamente.</p>
    `, 'bot');
}

function chatHandleVoucher(input) {
    const file = input.files[0];
    if (!file) return;
    const isImage = file.type.startsWith('image/');
    const icon = isImage ? 'fa-image' : 'fa-file-pdf';
    appendMsg(`
        <div class="chat-voucher-preview">
            <i class="fa-solid ${icon}"></i>
            <p>Comprobante recibido:</p>
            <div class="cvp-filename">${file.name}</div>
            <div class="cvp-validating"><i class="fa-solid fa-spinner fa-spin"></i> Validando con el sistema...</div>
        </div>
    `, 'bot');
    input.value = '';
    setTimeout(() => {
        const pago = chatCtx.selectedPago;
        const validationCode = `VAL-${Math.floor(Math.random() * 999000 + 1000)}`;
        let confirmMsg = `
            <p>✅ <strong>Comprobante validado correctamente</strong></p>
            <div class="chat-validated-badge"><i class="fa-solid fa-shield-check"></i> Código: ${validationCode}</div>
        `;
        if (pago) {
            DB.pagos = DB.pagos.filter(x => x.id !== pago.id);
            saveDB();
            renderPagos();
            confirmMsg += `<p style="margin-top:8px;">El pago de <strong>${pago.tipo}</strong> ha sido marcado como <strong>verificado</strong>. El municipio confirmará en 24 horas.</p>`;
            chatCtx.selectedPago = null;
        } else {
            confirmMsg += `<p style="margin-top:8px;">Tu comprobante fue registrado con éxito. El equipo del GAD lo revisará en un plazo de <strong>24 horas hábiles</strong>.</p>`;
        }
        chatCtx.intent = null;
        appendMsg(confirmMsg, 'bot');
        showToast('Comprobante de pago validado correctamente');
    }, 2200);
}

// ── Mini-formulario de Reporte conversacional ──
function chatStartReporte() {
    chatCtx.intent = 'reporte-categoria';
    chatCtx.reporteData = {};
    appendMsg(`
        <p>📸 Para enviar tu reporte, necesito unos datos. ¿Qué tipo de problema es?</p>
        <div class="chat-mini-form">
            <select id="chat-reporte-cat">
                <option value="">-- Selecciona una categoría --</option>
                <option value="Bache en vía">🚧 Bache en vía</option>
                <option value="Luminaria dañada">💡 Luminaria dañada</option>
                <option value="Fuga de agua">💧 Fuga de agua</option>
                <option value="Basura acumulada">🗑️ Basura acumulada</option>
                <option value="Árbol caído">🌳 Árbol caído</option>
                <option value="Señal de tránsito dañada">🚦 Señal de tránsito</option>
                <option value="Alcantarilla obstruida">🔩 Alcantarilla obstruida</option>
                <option value="Otro problema">❓ Otro</option>
            </select>
            <button class="btn btn-primary" style="font-size:0.84rem;" onclick="chatReporteNextStep()">Continuar →</button>
        </div>
    `, 'bot');
}

function chatReporteNextStep() {
    if (chatCtx.intent === 'reporte-categoria') {
        const cat = document.getElementById('chat-reporte-cat')?.value;
        if (!cat) { showToast('Por favor selecciona una categoría', 'err'); return; }
        chatCtx.reporteData.cat = cat;
        chatCtx.intent = 'reporte-descripcion';
        appendMsg(`
            <p>Perfecto: <strong>${cat}</strong>. Ahora, <strong>¿dónde ocurre el problema?</strong> (barrio, calle, referencia):</p>
            <div class="chat-mini-form">
                <textarea id="chat-reporte-ubi" placeholder="Ej: Barrio San José, frente al parque central..."></textarea>
                <button class="btn btn-primary" style="font-size:0.84rem;" onclick="chatReporteEnviar()">Enviar Reporte <i class="fa-solid fa-paper-plane"></i></button>
            </div>
        `, 'bot');
    }
}

function chatReporteEnviar() {
    const ubi = document.getElementById('chat-reporte-ubi')?.value.trim();
    if (!ubi) { showToast('Ingresa la ubicación del problema', 'err'); return; }
    const newRep = {
        id: `REP-${1000 + Math.floor(Math.random() * 8000)}`,
        cat: chatCtx.reporteData.cat, ubi,
        fecha: new Date().toLocaleDateString('es-EC'),
        estado: 'Enviado', badge: 'badge-blue', prioridad: 'Media'
    };
    DB.reportes.unshift(newRep);
    saveDB();
    renderReportes();
    chatCtx = { intent: null, selectedPago: null, reporteStep: null, reporteData: {} };
    appendMsg(`
        <p>✅ ¡Reporte enviado exitosamente!</p>
        <div style="background:var(--surface-2); border-radius:var(--r-sm); padding:12px; margin-top:8px; font-size:0.84rem;">
            <p><strong>📌 Problema:</strong> ${newRep.cat}</p>
            <p><strong>📍 Ubicación:</strong> ${newRep.ubi}</p>
            <p><strong>🏷️ Ticket:</strong> ${newRep.id}</p>
            <p><strong>📅 Fecha:</strong> ${newRep.fecha}</p>
        </div>
        <div class="chat-validated-badge"><i class="fa-solid fa-circle-check"></i> Reporte Registrado</div>
    `, 'bot');
    showToast('Reporte ciudadano enviado desde SanGa IA');
}

// ── Mini-formulario de Trámite conversacional ──
function chatStartTramite() {
    chatCtx.intent = 'tramite-tipo';
    appendMsg(`
        <p>📋 ¿Qué trámite deseas iniciar?</p>
        <div class="chat-mini-form">
            <select id="chat-tramite-tipo">
                <option value="">-- Selecciona el trámite --</option>
                <option>Certificado de Avalúos</option>
                <option>Permiso de Construcción</option>
                <option>Línea de Fábrica</option>
                <option>Patente Comercial</option>
                <option>Certificado de No Adeudar</option>
                <option>Aprobación de Planos</option>
                <option>Licencia de Funcionamiento</option>
                <option>Permiso de Demolición</option>
            </select>
            <button class="btn btn-primary" style="font-size:0.84rem;" onclick="chatTramiteEnviar()">Iniciar Trámite <i class="fa-solid fa-file-arrow-up"></i></button>
        </div>
    `, 'bot');
}

function chatTramiteEnviar() {
    const tipo = document.getElementById('chat-tramite-tipo')?.value;
    if (!tipo) { showToast('Selecciona un tipo de trámite', 'err'); return; }
    const newTrm = { id: `TRM-2026-${100 + Math.floor(Math.random() * 800)}`, tipo, fecha: new Date().toLocaleDateString('es-EC'), estado: 'Recibido', badge: 'badge-blue' };
    DB.tramites.unshift(newTrm);
    saveDB();
    renderTramites();
    chatCtx.intent = null;
    appendMsg(`
        <p>✅ ¡Trámite iniciado! Aquí tienes tu comprobante:</p>
        <div style="background:var(--surface-2); border-radius:var(--r-sm); padding:12px; margin-top:8px; font-size:0.84rem;">
            <p><strong>📑 Trámite:</strong> ${tipo}</p>
            <p><strong>🏷️ Número:</strong> ${newTrm.id}</p>
            <p><strong>📅 Fecha:</strong> ${newTrm.fecha}</p>
            <p><strong>🟡 Estado:</strong> Recibido · En proceso</p>
        </div>
        <div class="chat-validated-badge"><i class="fa-solid fa-circle-check"></i> Trámite Registrado</div>
    `, 'bot');
    showToast('Trámite iniciado desde SanGa IA');
}


function analyzeIntent(qRaw) {
    const q = qRaw.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // ── BASE DE CONOCIMIENTO DEL MUNICIPIO ──
    const KB = [
        { k: ['horario', 'atencion', 'oficina', 'abre', 'cierra', 'ventanilla', 'abren'], r: '<p>🕔 El GAD Municipal de Montúfar atiende de <strong>lunes a viernes de 08:00 a 17:00</strong> en San Gabriel, Carchi. Las ventanillas de Tesorería y Registro atienden de 08:00 a 16:00.</p>' },
        { k: ['telefono', 'numero', 'contacto', 'llamar', 'cel', 'whatsapp', 'comunicar'], r: '<p>📞 Puedes comunicarte con el municipio al <strong>(06) 2290-142</strong> o al correo <strong>info@montufar.gob.ec</strong>.</p>' },
        { k: ['alcalde', 'fabian', 'robles', 'autoridad', 'concejo', 'municipio'], r: '<p>🏛️ El Alcalde del GAD Municipal de Montúfar es el <strong>Ing. Fabián Robles</strong>. El Concejo Municipal sesiona los miércoles a las 09:00 en el Salón de Sesiones.</p>' },
        { k: ['direccion', 'queda', 'ubicacion', 'donde esta', 'como llegar al municipio'], r: '<p>📍 El GAD Municipal de Montúfar está en la <strong>calle Bolívar y Montúfar, San Gabriel, Carchi</strong>, a una cuadra del Parque Colón.</p>' },
        { k: ['catastro', 'avaluo', 'predio', 'impuesto predial'], r: '<p>🏠 Para consultas de catastro y avalúos prediales, acércate al Departamento de Avalúos. También puedes iniciarlo aquí en SanGa.</p><button class="btn btn-outline" style="font-size:0.8rem;margin-top:6px;" onclick="chatStartTramite()">Iniciar Trámite de Avalúos</button>' },
        { k: ['ruc', 'negocio', 'local comercial', 'comercio'], r: '<p>🏢 La Patente Municipal es obligatoria para todo negocio en el cantón. Puedes gestionarla desde SanGa en minutos.</p><button class="btn btn-outline" style="font-size:0.8rem;margin-top:6px;" onclick="chatStartTramite()">Solicitar Patente</button>' },
        { k: ['comprobante', 'transferencia', 'subir', 'adjuntar', 'validar pago'], r: '<p>📎 Toca el <strong>clip (📎)</strong> en la parte inferior del chat para adjuntar tu comprobante de pago y lo valido en segundos.</p>' },
        { k: ['mi cuenta', 'mis datos', 'mi perfil', 'mis tramites', 'historial'], r: `<p>👤 Hola <strong>${DB.usuario.nombre} ${DB.usuario.apellido}</strong>. Tienes <strong>${DB.tramites.length} trámites</strong> y <strong>${DB.pagos.length} obligaciones pendientes</strong>.</p><div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px;"><button class="btn btn-outline" style="font-size:0.78rem;" onclick="chatStartTramite()">Nuevo Trámite</button><button class="btn btn-outline" style="font-size:0.78rem;" onclick="chatShowPagos()">Mis Pagos</button><button class="btn btn-outline" style="font-size:0.78rem;" onclick="navToPage('page-perfil')">Mi Perfil</button></div>` },
        { k: ['emergencia', 'policia', 'bomberos', 'ambulancia', 'accidente', 'incendio', 'urgente', 'socorro'], r: '<p>🚨 Para emergencias llama al <strong>ECU 911</strong>. También puedes activar la alerta del municipio.</p><button class="btn" style="background:var(--danger);color:#fff;font-size:0.84rem;margin-top:6px;" onclick="reportEmergency()"><i class="fa-solid fa-siren-on"></i> Activar Alerta</button>' },
        { k: ['transparencia', 'presupuesto', 'gasto', 'plan', 'poa', 'rendicion'], r: '<p>📊 La información de obras y presupuesto está disponible en <strong>Municipio Transparente</strong>.</p><button class="btn btn-outline" style="font-size:0.8rem;margin-top:6px;" onclick="navToPage(\'page-transparencia\')">Ver Transparencia</button>' },
        { k: ['canton', 'montufar', 'san gabriel', 'carchi', 'historia', 'fundacion'], r: '<p>🌄 El Cantón Montúfar fue fundado el <strong>8 de septiembre de 1905</strong>. Su cabecera cantonal es <strong>San Gabriel</strong>, conocida como la "Ciudad de los Nevados". Tiene 7 parroquias: San José, Cristóbal Colón, Chitan, Fernández Salvador, La Paz, González Suárez y Piartal.</p>' },
        { k: ['clima', 'lluvia', 'temperatura', 'frio', 'tiempo'], r: '<p>🌤️ El clima de Montúfar es andino frío con temperaturas entre <strong>8°C y 18°C</strong>. Se recomienda llevar abrigo al visitar el Bosque de los Arrayanes o la Laguna del Salado.</p>' },
    ];

    // 0. Verificar si hay un contexto activo de flujo en curso
    if (chatCtx.intent === 'esperando-seleccion-pago' || chatCtx.intent === 'esperando-metodo-pago') {
        if (/pagar todas|todo|todas|si|confirmar/.test(q)) { chatShowPagos(); return; }
        if (/no|cancelar|salir/.test(q)) { chatCtx.intent = null; appendMsg('<p>Entendido, cuando quieras pagar dímelo 😊</p>', 'bot'); return; }
    }

    // 1. Buscar en la base de conocimiento (KB)
    for (const entry of KB) {
        if (entry.k.some(kw => q.includes(kw))) {
            appendMsg(entry.r, 'bot');
            return;
        }
    }

    // 2. Deep DB Search en turismo, rural, obras, eventos
    let matchedItem = null;
    let matchedType = '';
    const searchIn = (arr, type) => {
        for (const item of arr) {
            const text = ((item.titulo || '') + ' ' + (item.desc || '') + ' ' + (item.detalle || '')).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            const words = q.split(' ').filter(w => w.length > 4);
            if (words.some(w => text.includes(w)) || (q.length > 6 && text.includes(q))) {
                matchedItem = item; matchedType = type; return true;
            }
        }
        return false;
    };
    if (searchIn(DB.turismo, 'turismo')) { }
    else if (searchIn(DB.rural, 'rural')) { }
    else if (searchIn(DB.eventos, 'eventos')) { }
    else if (searchIn(DB.obras, 'obras')) { }

    if (matchedItem) {
        if (matchedType === 'turismo') {
            appendMsg(`<p>Encontré información precisa sobre: <strong>${matchedItem.titulo}</strong></p><p><em>${matchedItem.desc}</em></p>${matchedItem.horario ? `<p style="font-size:0.82rem;color:var(--text-sub);margin-top:6px;"><i class="fa-regular fa-clock"></i> ${matchedItem.horario} · <i class="fa-solid fa-ticket"></i> ${matchedItem.entrada}</p>` : ''}<button class="btn btn-outline" style="font-size:0.82rem;margin-top:8px;" onclick="navToPage('page-turismo')"><i class="fa-solid fa-map-location-dot"></i> Ver en Turismo</button>`, 'bot');
        } else if (matchedType === 'rural') {
            appendMsg(`<p>Tengo información de SanGa Rural sobre <strong>${matchedItem.titulo}</strong>:</p><p>${matchedItem.detalle || matchedItem.desc}</p><button class="btn btn-outline" style="font-size:0.82rem;margin-top:8px;" onclick="navToPage('page-rural')"><i class="fa-solid fa-tractor"></i> Ver Rural</button>`, 'bot');
        } else if (matchedType === 'eventos') {
            appendMsg(`<p>El evento <strong>${matchedItem.titulo}</strong> será el <strong>${matchedItem.dia} de ${matchedItem.mes}</strong> en ${matchedItem.lugar}. ${matchedItem.desc}</p><button class="btn btn-outline" style="font-size:0.82rem;margin-top:8px;" onclick="navToPage('page-eventos')"><i class="fa-solid fa-calendar-days"></i> Ver Eventos</button>`, 'bot');
        } else if (matchedType === 'obras') {
            appendMsg(`<p>La obra <strong>${matchedItem.titulo}</strong> lleva un avance del <strong>${matchedItem.avance}%</strong>. Contratista: ${matchedItem.contratista}. Presupuesto: ${matchedItem.presupuesto}. Estado: <em>${matchedItem.estado}</em>.</p><button class="btn btn-outline" style="font-size:0.82rem;margin-top:8px;" onclick="navToPage('page-transparencia')"><i class="fa-solid fa-hard-hat"></i> Ver Obras</button>`, 'bot');
        }
        return;
    }

    // 3. Scoring por intención principal (Bag of Words)
    const intents = {
        pagos:       { w: ['pagar', 'pago', 'predial', 'deuda', 'debo', 'patente', 'multa', 'tasa', 'dinero', 'deudas', 'obligacion', 'cobro'], score: 0 },
        turismo:     { w: ['turismo', 'visitar', 'viajar', 'conocer', 'lugar', 'bosque', 'cascada', 'laguna', 'gastronomia', 'iglesia', 'naturaleza', 'cultura'], score: 0 },
        rural:       { w: ['rural', 'campo', 'agricultura', 'agricola', 'semilla', 'brigada', 'parroquia', 'comunidad', 'tractor', 'cosecha'], score: 0 },
        eventos:     { w: ['evento', 'fiesta', 'concierto', 'feria', 'carrera', 'concejo', 'agenda', 'actividad', 'festival'], score: 0 },
        reportes:    { w: ['reportar', 'bache', 'luminaria', 'basura', 'problema', 'calle', 'roto', 'fuga', 'parque', 'dano', 'deterioro', 'queja'], score: 0 },
        tramites:    { w: ['tramite', 'permiso', 'certificado', 'linea', 'fabrica', 'solicitud', 'documento', 'sacar', 'registro', 'licencia'], score: 0 },
        comprobante: { w: ['comprobante', 'transferencia', 'subir', 'adjuntar', 'validar', 'envie'], score: 0 },
        saludo:      { w: ['hola', 'buenos', 'buenas', 'saludos', 'gracias', 'ola', 'buen dia'], score: 0 }
    };
    q.split(/\s+/).filter(w => w.length > 2).forEach(w => {
        for (const key in intents) {
            if (intents[key].w.some(kw => kw.includes(w) || w.includes(kw))) intents[key].score++;
        }
    });
    let best = null, maxScore = 0;
    for (const key in intents) {
        if (intents[key].score > maxScore) { maxScore = intents[key].score; best = key; }
    }

    // 4. Responder por intención ganadora
    if (best === 'pagos') {
        chatShowPagos();
    } else if (best === 'tramites') {
        appendMsg('<p>📋 Puedo ayudarte a iniciar un trámite ahora mismo:</p>', 'bot');
        setTimeout(() => chatStartTramite(), 400);
    } else if (best === 'reportes') {
        appendMsg('<p>📸 Voy a guiarte para enviar el reporte ciudadano:</p>', 'bot');
        setTimeout(() => chatStartReporte(), 400);
    } else if (best === 'comprobante') {
        chatCtx.intent = 'esperando-comprobante-transferencia';
        appendMsg('<p>📎 Toca el <strong>clip (📎)</strong> en la parte inferior para adjuntar la imagen de tu comprobante de pago y lo valido al instante.</p>', 'bot');
    } else if (best === 'turismo') {
        const t = DB.turismo[Math.floor(Math.random() * DB.turismo.length)];
        appendMsg(`<p>🏔️ ¡Montúfar tiene lugares increíbles! Te sugiero: <strong>${t.titulo}</strong>.</p><p><em>${t.desc}</em></p>`, 'bot');
        setTimeout(() => appendMsg(`<button class="btn btn-primary w-100" onclick="navToPage('page-turismo')"><i class="fa-solid fa-map-location-dot"></i> Explorar Turismo</button>`, 'bot'), 400);
    } else if (best === 'rural') {
        appendMsg('<p>🌾 SanGa Rural apoya al campo montufareño con <strong>vías, semillas, brigadas médicas y programas sociales</strong>.</p>', 'bot');
        setTimeout(() => appendMsg(`<button class="btn btn-primary w-100" onclick="navToPage('page-rural')"><i class="fa-solid fa-tractor"></i> Ver Servicios Rurales</button>`, 'bot'), 400);
    } else if (best === 'eventos') {
        const ev = DB.eventos[0];
        appendMsg(`<p>🎉 Próximo evento: <strong>${ev.titulo}</strong> el ${ev.dia} de ${ev.mes} en ${ev.lugar}.</p>`, 'bot');
        setTimeout(() => appendMsg(`<button class="btn btn-primary w-100" onclick="navToPage('page-eventos')"><i class="fa-solid fa-calendar-days"></i> Ver Agenda</button>`, 'bot'), 400);
    } else if (best === 'saludo') {
        appendMsg(`<p>¡Hola <strong>${DB.usuario.nombre}</strong>! 😊 Soy SanGa, tu asistente del GAD de Montúfar. Puedo ayudarte a <strong>pagar, tramitar, reportar, informarte sobre turismo</strong> y mucho más. ¿Qué necesitas?</p>`, 'bot');
    } else {
        appendMsg('<p>He analizado tu consulta. ¿Con cuál de estas áreas te puedo ayudar?</p>', 'bot');
        setTimeout(() => {
            appendMsg(`
                <div style="display:flex; gap:6px; flex-wrap:wrap; margin-top:6px;">
                    <button class="btn btn-outline" style="flex:1;min-width:90px;font-size:0.78rem;padding:7px;" onclick="chatShowPagos()">💳 Pagar</button>
                    <button class="btn btn-outline" style="flex:1;min-width:90px;font-size:0.78rem;padding:7px;" onclick="chatStartTramite()">📋 Trámite</button>
                    <button class="btn btn-outline" style="flex:1;min-width:90px;font-size:0.78rem;padding:7px;" onclick="chatStartReporte()">📸 Reporte</button>
                    <button class="btn btn-outline" style="flex:1;min-width:90px;font-size:0.78rem;padding:7px;" onclick="navToPage('page-turismo')">🏔️ Turismo</button>
                </div>
            `, 'bot');
        }, 300);
    }
}


// ═══════════════════════════════════════════════════
// 6. MODALES
// ═══════════════════════════════════════════════════
function openModal(id) { document.getElementById(id).classList.add('active'); }
function closeModal(id) { document.getElementById(id).classList.remove('active'); }

// ── TRÁMITES ──
function submitTramite(e) {
    e.preventDefault();
    const tipo = document.getElementById('tramite-tipo').value;
    DB.tramites.unshift({ id: `TRM-2026-${100 + Math.floor(Math.random() * 800)}`, tipo, fecha: new Date().toLocaleDateString('es-EC'), estado: 'Recibido', badge: 'badge-blue' });
    saveDB();
    renderTramites();
    closeModal('modal-nuevo-tramite');
    showToast('Trámite enviado correctamente. Número de seguimiento generado.');
    e.target.reset();
}

// ── REPORTES ──
function submitReporte(e) {
    e.preventDefault();
    const cat = document.getElementById('reporte-cat').value;
    DB.reportes.unshift({ id: `REP-${1000 + Math.floor(Math.random() * 8000)}`, cat, ubi: 'San Gabriel (GPS detectado)', fecha: new Date().toLocaleDateString('es-EC'), estado: 'Enviado', badge: 'badge-blue', prioridad: 'Media' });
    saveDB();
    renderReportes();
    closeModal('modal-nuevo-reporte');
    showToast('Reporte enviado al departamento correspondiente. Se generó un número de seguimiento.');
    e.target.reset();
}

// ── PAGOS ──
let pagoActual = { id: null, monto: 0, tipo: '' };

function openPaymentModal(id, monto, tipo) {
    pagoActual = { id, monto, tipo };
    document.getElementById('pago-servicio').textContent = tipo;
    document.getElementById('pago-monto').textContent = `$${monto.toFixed(2)}`;
    document.getElementById('bank-concepto').textContent = tipo;
    // Resetear a tab tarjeta
    switchPayTab('card');
    openModal('modal-pago');
}

function switchPayTab(tab) {
    const card = document.getElementById('pay-view-card');
    const transfer = document.getElementById('pay-view-transfer');
    const tCard = document.getElementById('tab-card');
    const tTrans = document.getElementById('tab-transfer');
    if (tab === 'card') {
        card.classList.remove('d-none');
        transfer.classList.add('d-none');
        tCard.classList.add('active');
        tTrans.classList.remove('active');
    } else {
        card.classList.add('d-none');
        transfer.classList.remove('d-none');
        tCard.classList.remove('active');
        tTrans.classList.add('active');
    }
}

function formatCard(input) {
    let v = input.value.replace(/\D/g, '').substring(0, 16);
    input.value = v.replace(/(.{4})/g, '$1 ').trim();
    document.getElementById('cp-num').textContent = input.value || '•••• •••• •••• ••••';
}

function updateCardPreview() {
    const name = document.getElementById('card-name').value.toUpperCase() || 'TITULAR';
    const exp = document.getElementById('card-exp').value || 'MM/AA';
    document.getElementById('cp-name').textContent = name;
    document.getElementById('cp-exp').textContent = exp;
}

function confirmPayment(method) {
    const msg = method === 'transfer'
        ? 'Subiendo comprobante de transferencia…'
        : 'Procesando pago con tarjeta…';
    showToast(msg, 'info');
    closeModal('modal-pago');
    setTimeout(() => {
        // Remover pago de la DB
        DB.pagos = DB.pagos.filter(p => p.id !== pagoActual.id);
        saveDB();
        renderPagos();
        const successMsg = method === 'transfer'
            ? 'Comprobante enviado. El pago está en verificación.'
            : `Pago de $${pagoActual.monto.toFixed(2)} procesado con éxito.`;
        showToast(successMsg);
        // Mostrar recibo
        setTimeout(() => generarRecibo(method), 500);
    }, 2000);
}

// ── RECIBO ──
function generarRecibo(method) {
    const now = new Date();
    const num = `REC-${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${Math.floor(Math.random() * 90000 + 10000)}`;
    const fecha = now.toLocaleDateString('es-EC', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' });
    const methodLabel = method === 'card' ? 'Tarjeta de Crédito/Débito' : 'Transferencia Bancaria';

    document.getElementById('recibo-content').innerHTML = `
        <div class="recibo-header">
            <img src="https://res.cloudinary.com/dtmqftcsr/image/upload/v1785797907/logo_municipio_jokfdn.png" class="recibo-logo" alt="Logo">
            <h3 style="font-size:1rem; margin-bottom:4px;">GAD MUNICIPAL DE MONTÚFAR</h3>
            <p style="font-size:0.78rem; opacity:0.8;">RUC: 0460000120001 · San Gabriel, Carchi</p>
            <p style="font-size:0.72rem; opacity:0.6; margin-top:4px;">COMPROBANTE ELECTRÓNICO NO. ${num}</p>
        </div>
        <div class="recibo-body">
            <table>
                <tr><td>Fecha y hora</td><td>${fecha}</td></tr>
                <tr><td>Ciudadano</td><td>${DB.usuario.nombre} ${DB.usuario.apellido}</td></tr>
                <tr><td>Cédula</td><td>${DB.usuario.cedula}</td></tr>
                <tr><td>Correo</td><td>${DB.usuario.correo}</td></tr>
                <tr><td>Concepto</td><td><strong>${pagoActual.tipo}</strong></td></tr>
                <tr><td>Método de pago</td><td>${methodLabel}</td></tr>
                <tr><td>Estado</td><td><span class="badge badge-success">Pagado ✓</span></td></tr>
            </table>
        </div>
        <div class="recibo-total">
            <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:2px;">TOTAL PAGADO</p>
            <div class="rt-val">$${pagoActual.monto.toFixed(2)}</div>
        </div>
        <div class="recibo-qr">
            <p style="font-size:0.75rem; color:var(--text-muted);">Código de verificación electrónica</p>
            <div class="qr-box"><i class="fa-solid fa-qrcode"></i></div>
            <p style="font-size:0.7rem; color:var(--text-disabled);">${num} · Válido ante organismos de control</p>
        </div>
    `;
    openModal('modal-recibo');
}

function printRecibo() {
    showToast('Abriendo impresora del sistema…', 'info');
    window.print();
}

function sendReciboEmail() {
    showToast(`Comprobante enviado a ${DB.usuario.correo}`);
    closeModal('modal-recibo');
}

// ═══════════════════════════════════════════════════
// 7. EMERGENCIAS Y NOTIFICACIONES
// ═══════════════════════════════════════════════════
function reportEmergency() {
    if (confirm('¿Confirmas el envío de una ALERTA DE EMERGENCIA al Municipio de Montúfar y a las autoridades competentes con tu ubicación GPS actual?')) {
        showToast('🚨 Alerta enviada. Las autoridades han sido notificadas.', 'warn');
    }
}

function showToast(msg, type = 'success') {
    const c = document.getElementById('toast-container');
    const t = document.createElement('div');
    t.className = `toast${type === 'warn' ? ' warn' : type === 'err' ? ' err' : ''}`;
    t.innerHTML = `<i class="fa-solid ${type === 'warn' ? 'fa-triangle-exclamation' : type === 'info' ? 'fa-circle-info' : 'fa-circle-check'}" style="margin-right:8px;"></i>${msg}`;
    c.appendChild(t);
    setTimeout(() => { if (t.parentElement) t.remove(); }, 3500);
}

// ═══════════════════════════════════════════════════
// 8. REGISTRO DE USUARIO
// ═══════════════════════════════════════════════════

// Escuchar el campo de contraseña para el medidor de fortaleza
document.addEventListener('DOMContentLoaded', () => {
    const passInput = document.getElementById('reg-pass');
    if (passInput) {
        passInput.addEventListener('input', function () {
            const val = this.value;
            let score = 0;
            if (val.length >= 8) score++;
            if (/[A-Z]/.test(val)) score++;
            if (/[0-9]/.test(val)) score++;
            if (/[^A-Za-z0-9]/.test(val)) score++;

            const fill = document.getElementById('strength-fill');
            const label = document.getElementById('strength-label');
            const levels = [
                { w: '0%', bg: '', text: '' },
                { w: '25%', bg: 'var(--danger)', text: '⚠ Muy débil' },
                { w: '50%', bg: 'var(--warning)', text: '~ Débil' },
                { w: '75%', bg: '#f59e0b', text: '✔ Aceptable' },
                { w: '100%', bg: 'var(--accent)', text: '✔✔ Segura' }
            ];
            fill.style.width = levels[score].w;
            fill.style.background = levels[score].bg;
            label.textContent = levels[score].text;
            label.style.color = levels[score].bg;
        });
    }
});

function regNextStep(current) {
    // Validación por paso
    if (current === 1) {
        const cedula = document.getElementById('reg-cedula').value.trim();
        const nombre = document.getElementById('reg-nombre').value.trim();
        const apellido = document.getElementById('reg-apellido').value.trim();
        const parroquia = document.getElementById('reg-parroquia').value;
        if (!cedula || cedula.length !== 10 || isNaN(cedula)) {
            showToast('Ingresa una cédula válida de 10 dígitos.', 'err'); return;
        }
        if (!nombre || !apellido) {
            showToast('Ingresa tu nombre y apellido completos.', 'err'); return;
        }
        if (!parroquia) {
            showToast('Selecciona tu parroquia de residencia.', 'err'); return;
        }
    }

    if (current === 2) {
        const email = document.getElementById('reg-email').value.trim();
        const tel = document.getElementById('reg-telefono').value.trim();
        const pass = document.getElementById('reg-pass').value;
        const pass2 = document.getElementById('reg-pass2').value;
        if (!email || !email.includes('@')) {
            showToast('Ingresa un correo electrónico válido.', 'err'); return;
        }
        if (!tel || tel.length < 9) {
            showToast('Ingresa un número de teléfono válido.', 'err'); return;
        }
        if (pass.length < 8) {
            showToast('La contraseña debe tener al menos 8 caracteres.', 'err'); return;
        }
        if (pass !== pass2) {
            showToast('Las contraseñas no coinciden.', 'err'); return;
        }
        // Mostrar correo en el OTP
        document.getElementById('otp-correo-label').textContent = email;
        showToast(`Código OTP enviado a ${email}`, 'info');
    }

    // Avanzar paso
    const nextPaso = current + 1;
    showRegPaso(nextPaso);

    // Marcar dot actual como done y activar el siguiente
    const curDot = document.getElementById(`step-dot-${current}`);
    const nextDot = document.getElementById(`step-dot-${nextPaso}`);
    if (curDot) { curDot.classList.remove('active'); curDot.classList.add('done'); }
    if (nextDot) nextDot.classList.add('active');
}

function regPrevStep(current) {
    const prevPaso = current - 1;
    showRegPaso(prevPaso);

    const curDot = document.getElementById(`step-dot-${current}`);
    const prevDot = document.getElementById(`step-dot-${prevPaso}`);
    if (curDot) curDot.classList.remove('active');
    if (prevDot) { prevDot.classList.remove('done'); prevDot.classList.add('active'); }
}

function showRegPaso(n) {
    ['1', '2', '3', 'exito'].forEach(p => {
        const el = document.getElementById(`reg-paso-${p}`);
        if (el) el.classList.add('d-none');
    });
    const target = document.getElementById(`reg-paso-${n}`);
    if (target) target.classList.remove('d-none');
}

function otpNext(input, idx) {
    if (input.value.length === 1) {
        const inputs = document.querySelectorAll('.otp-digit');
        if (inputs[idx + 1]) inputs[idx + 1].focus();
    }
}

function resendOtp() {
    const email = document.getElementById('reg-email').value;
    showToast(`Código reenviado a ${email}`, 'info');
}

function submitRegistro() {
    // Validar OTP
    const digits = [...document.querySelectorAll('.otp-digit')].map(i => i.value).join('');
    if (digits !== '123456') {
        showToast('Código incorrecto. Para la demo usa: 123456', 'err');
        return;
    }

    // Guardar nuevo usuario en DB
    const nombre = document.getElementById('reg-nombre').value.trim();
    const apellido = document.getElementById('reg-apellido').value.trim();
    const cedula = document.getElementById('reg-cedula').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const tel = document.getElementById('reg-telefono').value.trim();
    const parr = document.getElementById('reg-parroquia').value;

    DB.usuario = { nombre, apellido, cedula, correo: email, telefono: tel, parroquia: parr };

    // Marcar último paso
    const dot3 = document.getElementById('step-dot-3');
    if (dot3) { dot3.classList.remove('active'); dot3.classList.add('done'); }

    // Mostrar resumen de éxito
    document.getElementById('reg-success-msg').textContent =
        `Tu cuenta ciudadana en el Municipio de Montúfar ha sido creada exitosamente. Puedes ingresar de inmediato.`;

    document.getElementById('reg-resumen').innerHTML = `
        <p><strong>Nombre:</strong> ${nombre} ${apellido}</p>
        <p><strong>Cédula:</strong> ${cedula}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${tel}</p>
        <p><strong>Parroquia:</strong> ${parr}</p>
    `;

    showRegPaso('exito');
}

function loginConNuevaCuenta() {
    closeModal('modal-registro');
    showToast(`¡Bienvenido, ${DB.usuario.nombre}! Sesión iniciada correctamente.`);
    switchView('view-citizen');
    renderAllModules();
    // Actualizar saludo del hero
    const h1 = document.querySelector('#page-dashboard .hero-banner h1');
    if (h1) h1.textContent = `¡Bienvenido, ${DB.usuario.nombre}!`;
}

