declare module '@react-pdf/layout' {
  async function layout(pdf: Document): Promise<{
    children: { type: string }[];
  }>;
  export = layout;
}
