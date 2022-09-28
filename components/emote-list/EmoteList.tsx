import Image from "next/image";
import { ChangeEvent, useEffect, useState, useTransition } from "react";
import toast from "react-hot-toast";
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
    const newQuery = e.currentTarget.value.replaceAll(":", "");
    setQuery(e.currentTarget.value);
    startTransition(() => {
      setEmotes(
        initialEmoteList.filter((emote) =>
          emote.code.toLowerCase().includes(newQuery.toLowerCase())
        )
      );
    });
  };

  const handleClick = (codeToCopy: string) => {
    navigator.clipboard.writeText(`:${codeToCopy}:`);
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
          <button
            key={emote.code}
            className={styles.emote}
            onClick={() => {
              handleClick(emote.code);
              toast(`\"${emote.code}\" copied to clipboard!`);
            }}
          >
            <Image
              src={`/emotes/${emote.filename}`}
              width={48}
              height={48}
              alt={`${emote.filename} emote`}
            />
            <span className={styles["emote-text"]}>:{emote.code}:</span>
          </button>
        ))}
      </section>
    </>
  );
}
export default EmoteList;
