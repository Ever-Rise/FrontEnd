import { useState, useRef, useEffect } from "react";
import styles from "./styles.module.css";

const BOT_RESPONSES = [
    "Claro! Posso ajudar com isso. Pode me dar mais detalhes? 😊",
    "Entendido! Vou verificar as informações para você agora.",
    "Ótima pergunta! Deixa eu te explicar como funciona...",
    "Sem problemas! Estou aqui para ajudar no que precisar. 🚀",
    "Certo! Para resolver isso, precisamos de mais algumas informações.",
];

const INITIAL_MESSAGES = [
    {
        id: 1,
        from: "bot",
        text: "Olá! Sou Lipe, assistente virtual da EverRise 👋\nComo posso ajudar você hoje?",
        time: "14h30",
    },
];

// ── Icons ──────────────────────────────────────────────────────────────────
function IconChat() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.fabIcon}
        >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
    );
}

function IconX() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="16"
            height="16"
        >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    );
}

function IconSend() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="18"
            height="18"
        >
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
    );
}

// ── Subcomponents ──────────────────────────────────────────────────────────
function BotAvatar() {
    return <div className={styles.msgAvatar}>🤖</div>;
}

function Message({ msg }) {
    const isBot = msg.from === "bot";
    return (
        <div
            className={`${styles.messageRow} ${isBot ? styles.bot : styles.user}`}
        >
            {isBot && <BotAvatar />}
            <div
                className={`${styles.bubble} ${isBot ? styles.bot : styles.user}`}
            >
                {msg.text.split("\n").map((line, i) => (
                    <span key={i}>
                        {line}
                        {i < msg.text.split("\n").length - 1 && <br />}
                    </span>
                ))}
                <div
                    className={styles.msgTime}
                    style={{ textAlign: isBot ? "left" : "right" }}
                >
                    {msg.time}
                </div>
            </div>
        </div>
    );
}

function TypingIndicator() {
    return (
        <div className={styles.typingRow}>
            <BotAvatar />
            <div className={styles.typingBubble}>
                <div className={styles.dot} />
                <div className={styles.dot} />
                <div className={styles.dot} />
            </div>
        </div>
    );
}

// ── Main Component ─────────────────────────────────────────────────────────
export default function ChatWidget() {
    const [open, setOpen] = useState(false);
    const [closing, setClosing] = useState(false);
    const [messages, setMessages] = useState(INITIAL_MESSAGES);
    const [inputVal, setInputVal] = useState("");
    const [typing, setTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const now = new Date();
    const timeStr = `${now.getHours()}h${String(now.getMinutes()).padStart(2, "0")}`;

    useEffect(() => {
        if (open) {
            setTimeout(
                () =>
                    messagesEndRef.current?.scrollIntoView({
                        behavior: "smooth",
                    }),
                80,
            );
            setTimeout(() => inputRef.current?.focus(), 350);
        }
    }, [open, messages]);

    function handleClose() {
        setClosing(true);
        setTimeout(() => {
            setOpen(false);
            setClosing(false);
        }, 240);
    }

    function handleToggle() {
        if (open) handleClose();
        else setOpen(true);
    }

    function sendMessage() {
        const text = inputVal.trim();
        if (!text) return;

        const userMsg = { id: Date.now(), from: "user", text, time: timeStr };
        setMessages((prev) => [...prev, userMsg]);
        setInputVal("");
        setTyping(true);

        setTimeout(
            () => {
                const botText =
                    BOT_RESPONSES[
                        Math.floor(Math.random() * BOT_RESPONSES.length)
                    ];
                const botMsg = {
                    id: Date.now() + 1,
                    from: "bot",
                    text: botText,
                    time: timeStr,
                };
                setMessages((prev) => [...prev, botMsg]);
                setTyping(false);
            },
            1200 + Math.random() * 800,
        );
    }

    function handleKey(e) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    }

    return (
        <div className={styles.page}>
            <p className={styles.demoHint}>Clique no botão laranja →</p>

            {/* Chat Widget */}
            {open && (
                <div
                    className={`${styles.chatWidget} ${closing ? styles.closing : ""}`}
                >
                    {/* Header */}
                    <div className={styles.header}>
                        <div className={styles.avatarWrapper}>
                            <div className={styles.avatar}>🤖</div>
                            <div className={styles.onlineDot} />
                        </div>
                        <div className={styles.headerInfo}>
                            <p className={styles.botName}>Lipe ChatBoot</p>
                            <p className={styles.botSubtitle}>
                                Atendimento automático
                            </p>
                        </div>
                        <button
                            className={styles.closeBtn}
                            onClick={handleClose}
                            aria-label="Fechar chat"
                        >
                            <IconX />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className={styles.messagesArea}>
                        <div className={styles.dateSeparator}>
                            <span className={styles.dateText}>Hoje, 14h30</span>
                        </div>

                        {messages.map((msg) => (
                            <Message key={msg.id} msg={msg} />
                        ))}

                        {typing && <TypingIndicator />}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className={styles.inputArea}>
                        <input
                            ref={inputRef}
                            className={styles.inputField}
                            type="text"
                            placeholder="Digite sua mensagem..."
                            value={inputVal}
                            onChange={(e) => setInputVal(e.target.value)}
                            onKeyDown={handleKey}
                            disabled={typing}
                        />
                        <button
                            className={styles.sendBtn}
                            onClick={sendMessage}
                            disabled={!inputVal.trim() || typing}
                            aria-label="Enviar mensagem"
                        >
                            <IconSend />
                        </button>
                    </div>
                </div>
            )}

            {/* FAB */}
            <button
                className={styles.fab}
                onClick={handleToggle}
                aria-label="Abrir chat"
            >
                <IconChat />
            </button>
        </div>
    );
}
