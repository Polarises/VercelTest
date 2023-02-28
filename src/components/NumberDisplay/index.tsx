import {FC} from "react";
import styles from './styles.module.scss';

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const digitRegexp = /\d/;

interface Props {
    numberString: string; // '123'
}

const NumberDisplay: FC<Props> = (props) => {
    const { numberString } = props;

    return (
      <div>
          <h2>有奖问答，这是什么时间。</h2>
          <div className={styles.numberDisplay}>
              {/* ['1', '2', '3']*/}

              {numberString.split('').map((digitStr, index) => (
                  <div className={styles.digitWrapper} key={index}>
                      {
                          digitRegexp.test(digitStr) ? (
                              // 展示数字
                              <span className={styles.digitList} style={{
                                  transform: `translate(-50%, ${-Number(digitStr) * 32}px)`
                              }}>
                                {digits.map(digit => (
                                    <span className={styles.digit} key={digit}>{digit}
                                    </span>
                                ))}
                              </span>
                          ) : (
                              // 展示普通字符
                              <span>{digitStr}</span>
                          )
                      }
                  </div>
              ))}
          </div>
      </div>
    )
}

export default NumberDisplay;
