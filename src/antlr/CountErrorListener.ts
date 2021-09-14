import { ANTLRErrorListener, Recognizer, RecognitionException } from 'antlr4ts';

export type CountError = (e: RecognitionException | undefined) => void;
export class CountErrorListener implements ANTLRErrorListener<any> {
  public static readonly INSTANCE: CountErrorListener =
    new CountErrorListener();

  private countError?: CountError;

  constructor(countError?: CountError) {
    this.countError = countError;
  }
  public syntaxError<T>(
    recognizer: Recognizer<T, any>,
    offendingSymbol: T,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: RecognitionException | undefined,
  ): void {
    this.countError && this.countError(e);
  }
}
