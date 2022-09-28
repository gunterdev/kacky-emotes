import Image from "next/image";
import { ChangeEvent, useEffect, useState, useTransition } from "react";
import styles from "../../styles/EmoteList.module.css";
import { Emotes } from "../../types";

type Props = {
  initialEmoteList: Emotes;
};

function EmoteList({ initialEmoteList }: Props) {
  const { 1: startTransition } = useTransition();
  const [emotes, setEmotes] = useState<Emotes>([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    setEmotes(initialEmoteList);
  }, [initialEmoteList]);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
    startTransition(() => {
      setEmotes(
        initialEmoteList.filter((emote) =>
          emote.code.toLowerCase().includes(e.currentTarget.value.toLowerCase())
        )
      );
    });
  };
  return (
    <>
      <label className={styles.label}>
        Search Emote:
        <input
          className={styles.input}
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
      </label>
      <section className={styles.container}>
        {emotes.map((emote) => (
          <div key={emote.code} className={styles.emote}>
            <Image
              src={`/emotes/${emote.filename}`}
              width={48}
              height={48}
              alt={`${emote.filename} emote`}
            />
            <span className={styles["emote-text"]}>{emote.code}</span>
          </div>
        ))}
      </section>
    </>
  );
}
export default EmoteList;
