import { useEffect, useRef, useState } from "react";
import styles from "./verification.module.scss";
import Typed from "typed.js";

const Verification = ({ setPraiseText }: { setPraiseText: any }) => {
  const el = useRef(null);
  const [text, setText] = useState("");

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "欢迎来到俺的gpt，夸夸我就给你用（哈哈哈，知道名字才用的了，可恶哦！！！）",
        "我不叫张杰哦，哈哈哈",
      ],
      typeSpeed: 100,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  const handleKeyDown = (event: { key: string; }) => {
    // 判断按下的键是否是回车键
    if (event.key === "Enter" && text) {
      if (text?.includes("朱斌")) {
        localStorage.setItem("praiseMe", text);
        setPraiseText?.(text);
      }
    }
  };

  return (
    <div className={styles.verification}>
      <div className={styles.container}>
        <div className={styles.input_container}>
          <span className={styles.tip} ref={el}></span>
          <input
            placeholder="夸夸我就行：比如张杰真帅、张杰牛逼、张杰真聪明"
            onKeyDown={handleKeyDown}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Verification;
