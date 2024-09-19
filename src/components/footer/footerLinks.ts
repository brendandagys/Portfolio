import githubIcon from '../../images/github-icon.svg';
import linkedInIcon from '../../images/linkedin-icon.svg';
import emailIcon from '../../images/email-icon-3.svg';

export interface FooterLink {
  href: string;
  src: string;
  color: string;
  style: React.CSSProperties;
}

export const footerLinks = [
  {
    href: 'https://github.com/brendandagys',
    src: githubIcon,
    style: { borderRadius: "25px" },
  },
  {
    href: "https://linkedin.com/in/brendandagys",
    src: linkedInIcon,
    style: { borderRadius: "10px" },
  },
  {
    href: "mailto:brendandagys@gmail.com",
    src: emailIcon,
    style: { padding: '.4rem', borderRadius: "10px" },
  },
];
