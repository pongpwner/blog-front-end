import styled from "styled-components";

export const Content = styled.p`
  margin: 2rem;
  text-align: start;
  font-size: 2rem;
  overflow-wrap: break-word;
  ul {
    list-style: disc;
    margin-left: 4rem;
  }
  ol {
    list-style: decimal-leading-zero;
    margin-left: 4rem;
  }
  .code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }
  pre {
    background: #0d0d0d;
    color: #fff;
    font-family: "JetBrainsMono", monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    .code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }
  img {
    display: block;
    max-width: 70rem;
    max-height: 50rem;
    margin: 0 auto;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 3px solid rgba(#ffffff, 0.4);
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0d0d0d, 0.1);
    margin: 2rem 0;
  }
`;
