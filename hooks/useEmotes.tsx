import { useCallback, useState } from "react";
import { Emotes } from "../types";
const useEmotes = () => {
  const [emotes, setEmotes] = useState<Emotes>([]);

  const loadEmotes = useCallback(async () => {
    try {
      const response = await fetch("/api/emotes");
      const data = await response.json();
      setEmotes(data);
    } catch (error) {
      console.error(error);
    }
  }, []);
  return { emotes, loadEmotes };
};
export default useEmotes;
