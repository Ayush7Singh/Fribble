import { createContext, useState } from "react";

const globalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [isAdmin, setAdmin] = useState(false);
  const [chat, setChat] = useState([]);
  const [gameSettings, setGameSettings] = useState({});
  const [presenter, setPresenter] = useState(false);
  const [chatBlock, setChatBlock] = useState(false);
  const [lobby, setLobby] = useState([]);
  const [presenterDetails, setPresenterDetails] = useState(null);
  const [presenterName, setPresenterName] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const [guessWord, setGuessWord] = useState("");
  const [remainingHints, setRemainingHints] = useState("");
  const [displayHint, setDisplayHint] = useState(false);
  const [userName, setUserName] = useState("");
  const [round, setRound] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResult , setShowResult] = useState(false);

  return (
    <globalStateContext.Provider
      value={{
        isAdmin,
        setAdmin,
        chat,
        setChat,
        gameSettings,
        setGameSettings,
        presenter,
        setPresenter,
        chatBlock,
        setChatBlock,
        lobby,
        setLobby,
        presenterDetails,
        setPresenterDetails,
        gameStarted,
        setGameStarted,
        guessWord,
        setGuessWord,
        displayHint,
        setDisplayHint,
        remainingHints,
        setRemainingHints,
        userName,
        setUserName,
        round,
        setRound,
        presenterName,
        setPresenterName,
        loading,
        setLoading,
        showResult,
        setShowResult
      }}
    >
      {children}
    </globalStateContext.Provider>
  );
};

export default globalStateContext;
