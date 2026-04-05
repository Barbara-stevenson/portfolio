export default function ContactFooterLinks() {
  return (
    <div className="border-t border-white/10 pt-6">
      <nav className="flex items-center justify-between">
        <a
          href="https://www.linkedin.com/in/barbara-odusola-stevenson/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-social-brown text-caption font-medium hover:text-heading-orange transition-colors"
        >
          Linkedin
        </a>
        <a
          href="https://medium.com/@barbara-stevenson"
          target="_blank"
          rel="noopener noreferrer"
          className="text-social-brown text-caption font-medium hover:text-heading-orange transition-colors"
        >
          Medium
        </a>
        <a
          href="mailto:Barbarastevenson.design@gmail.com"
          className="text-social-brown text-caption font-medium hover:text-heading-orange transition-colors"
        >
          Barbarastevenson.design@gmail.com
        </a>
      </nav>
    </div>
  );
}
