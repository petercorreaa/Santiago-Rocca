import { Camera, Mail } from "lucide-react";
import { social, contactEmail } from "@/lib/content";

const socialLinks = [
  { ...social.instagram, Icon: Camera, label: "Instagram" },
];

export function ContactForm() {
  return (
    <div className="flex flex-col gap-10">
      {/* Redes sociales */}
      <div>
        <p className="label mb-5 text-white/40">Encontrame en</p>
        <ul className="flex flex-col gap-4">
          {socialLinks.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-white/50 transition-colors duration-200 hover:text-white"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-ink-border transition-colors duration-200 group-hover:border-accent group-hover:text-accent">
                  <Icon size={17} strokeWidth={1.75} />
                </span>
                <span className="text-sm font-semibold">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Email */}
      <div>
        <p className="label mb-5 text-white/40">Escribime</p>
        <a href={`mailto:${contactEmail}`} className="btn-primary">
          <Mail size={17} strokeWidth={1.75} />
          {contactEmail}
        </a>
      </div>
    </div>
  );
}
