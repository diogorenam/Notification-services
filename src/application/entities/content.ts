export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validateContentlength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const IsContentlengthValid = this.validateContentlength(content);

    if (!IsContentlengthValid) {
      throw new Error('content lenght erro.');
    }
    this.content = content;
  }
}
