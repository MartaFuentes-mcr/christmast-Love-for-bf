const postales = [
  {
    id: 1,
    title: "Level 1: Start Game",
    message: "Hoy empieza diciembre… y con él, mi regalo diario para el chico que convierte ideas en mundos.<br><br>Gracias por crear con el corazón. Cada línea de código tuya suena como una canción navideña para mí. ❤️",
    icon: "🎮",
    song: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Jingle%20Bells.mp3"
  },
  {
    id: 2,
    title: "Level 2: Debugging Love",
    message: "Si tu código tiene un bug, lo solucionas con paciencia.<br>Si mi alma tiene uno, tú lo reparas con solo existir.<br><br>Admiro tu constancia… y cómo nunca dejas de construir, incluso en la oscuridad.",
    icon: "👾",
    song: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Deck%20the%20Halls%20B.mp3"
  },
  {
    id: 3,
    title: "Level 3: Asset Acquired",
    message: "Si yo fuera un asset pack, hoy te regalaría:<br>– Un abrazo envuelto en luces de navidad<br>– Fe inquebrantable en tus sueños<br>– Y un corazón que late al ritmo de tus teclas.<br><br>Feliz Navidad,al hombre de mi vida .",
    icon: "💎",
    song: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/We%20Wish%20You%20a%20Merry%20Christmas.mp3"
  },
  {
    id: 4,
    title: "Level 4: Loading...",
    message: "Cargando… paciencia, cariño y una pizca de magia invernal.<br>Hoy mi mensaje es este: <em>Respira. Estoy contigo.</em>",
    icon: "💾",
    song: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Silent%20Night.mp3"
  },
  {
    id: 5,
    title: "Level 5: Checkpoint Reached",
    message: "Cinco días de diciembre, cinco razones más para admirarte.<br>Hoy celebro tu perseverancia… y cómo conviertes cada error en una oportunidad.",
    icon: "🚩",
    song: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Oh%20Holy%20Night.mp3"
  },
  {
    id: 6,
    title: "Level 6: New Skill Unlocked",
    message: "Habilidad desbloqueada: <em>Amor que no necesita compilación.</em><br>Funciona en tiempo real… y dura para siempre.",
    icon: "✨",
    song: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Dance%20of%20the%20Sugar%20Plum%20Fairy.mp3"
  },
  {
    id: 7,
    title: "Level 7: Boss Battle?",
    message: "No hay jefe final que valga.<br>Porque tú ya ganaste mi corazón el día que decidiste seguir creando, incluso cuando todo parecía fallar.",
    icon: "⚔️",
    song: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Up%20on%20a%20Housetop.mp3"
  },
  {
    id: 8,
    title: "Level 8: High Score",
    message: "En el leaderboard del amor, tú estás en primer lugar.<br>No por puntos… sino porque nadie construye mundos con tanta ternura como tú.",
    icon: "🏆",
    song: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Angels%20We%20Have%20Heard%20on%20High.mp3"
  },
  {
    id: 9,
    title: "Level 9: Power Up",
    message: "Toma este power-up: una dosis de calma, una chispa de alegría… y yo, animándote desde la nieve virtual de diciembre.",
    icon: "🍄",
    song: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Jingle%20Bells.mp3"
  },
  {
    id: 10,
    title: "Level 10: Quest Log",
    message: "Misión de hoy: <em>Mírate en el espejo y reconoce todo lo que ya has logrado.</em><br>Porque eres más fuerte de lo que crees… y más amado de lo que imaginas.",
    icon: "📜",
    song: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Deck%20the%20Halls%20B.mp3"
  },
  {
    id: 11,
    title: "Level 11: NPC Interaction",
    message: "Este NPC no es secundario: soy tu mayor fan, tu refugio en los bugs de la vida… y quien sueña contigo más allá del código.",
    icon: "💬",
    song: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/We%20Wish%20You%20a%20Merry%20Christmas.mp3"
  },
  {
    id: 12,
    title: "Level 12: Inventory Full",
    message: "Mi inventario está lleno… de recuerdos tuyos, de tus palabras, de la forma en que iluminas incluso los días más grises.<br>Feliz doce días de Adviento, amor.",
    icon: "🎒",
    song: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Silent%20Night.mp3"
  },
  {
    id: 13,
    title: "Level 13: Glitch Free",
    message: "Hoy, sin errores. Sin fallos.<br>Solo tú, yo… y la suave magia de diciembre envolviéndonos como una manta.",
    icon: "🕹️",
    song: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Oh%20Holy%20Night.mp3"
  },
  {
    id: 14,
    title: "Level 14: Beta Tester",
    message: "Estoy probando una versión beta del futuro…<br>y en todas las iteraciones, estás tú. Porque contigo, todo funciona mejor.",
    icon: "🧪",
    song: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Dance%20of%20the%20Sugar%20Plum%20Fairy.mp3"
  },
  {
    id: 15,
    title: "Level 15: Patch Notes",
    message: "Actualización de amor – v1.15:<br>• Corrección de inseguridades<br>• Añadido: más abrazos<br>• Mejora de rendimiento emocional<br><br>Gracias por ser mi usuario favorito.",
    icon: "📝",
    song: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Up%20on%20a%20Housetop.mp3"
  },
  {
    id: 16,
    title: "Level 16: Rendering...",
    message: "Renderizando un diciembre contigo…<br>donde cada frame brilla con tus sonrisas y tus logros.",
    icon: "🎨",
    song: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Angels%20We%20Have%20Heard%20on%20High.mp3"
  },
  {
    id: 17,
    title: "Level 17: Frame Rate",
    message: "Mi corazón no corre a 60fps…<br>corre a 144fps, y solo por ti. Porque contigo, cada segundo merece ser fluido y hermoso.",
    icon: "⚡",
    song: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Jingle%20Bells.mp3"
  },
  {
    id: 18,
    title: "Level 18: Multiplayer",
    message: "El mejor modo de juego no es solo… es <em>contigo</em>.<br>Porque juntos, hasta el silencio suena como una melodía navideña.",
    icon: "👥",
    song: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Deck%20the%20Halls%20B.mp3"
  },
  {
    id: 19,
    title: "Level 19: Easter Egg",
    message: "Has encontrado el huevo de Pascua más valioso:<br><em>Yo te elijo, cada día, en cada línea de tiempo.</em>",
    icon: "🥚",
    song: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/We%20Wish%20You%20a%20Merry%20Christmas.mp3"
  },
  {
    id: 20,
    title: "Level 20: Speedrun",
    message: "No corramos. Detengámonos.<br>Porque lo mejor de diciembre no es llegar a Navidad… es caminar hacia ella juntos.",
    icon: "⏱️",
    song: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Silent%20Night.mp3"
  },
  {
    id: 21,
    title: "Level 21: Game Over?",
    message: "¿Game over? Nunca.<br>Esto es <em>Infinite Play</em>… con pausas para abrazos, risas, y sueños compartidos bajo las luces del árbol.",
    icon: "🔄",
    song: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Oh%20Holy%20Night.mp3"
  },
  {
    id: 22,
    title: "Level 22: Credits",
    message: "Créditos finales:<br>• Música: tu risa<br>• Arte: tus ojos<br>• Guion: nuestro amor<br><br>Gracias por ser el protagonista de mi historia real.",
    icon: "🎬",
    song: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Dance%20of%20the%20Sugar%20Plum%20Fairy.mp3"
  },
  {
    id: 23,
    title: "Level 23: Bonus Stage",
    message: "Día extra… como un regalo sorpresa envuelto en papel de estrellas.<br>Porque mereces más de lo que pide el calendario.",
    icon: "⭐",
    song: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Up%20on%20a%20Housetop.mp3"
  },
  {
    id: 24,
    title: "Level 24: Final Boss",
    message: "¡Feliz Nochebuena!<br>Esta es la pantalla final… pero también el comienzo de algo hermoso.<br>Porque hoy, y siempre, te regalo lo más valioso: mi corazón, libre de bugs y lleno de ti. 🎄❤️",
    icon: "🎄",
    song: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Angels%20We%20Have%20Heard%20on%20High.mp3"
  }
];