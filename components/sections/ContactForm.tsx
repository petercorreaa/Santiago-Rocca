import { Mail } from "lucide-react";
import { contactEmail, whatsappContact } from "@/lib/content";

export function ContactForm() {
  return (
    <div className="flex flex-col gap-10">
      {/* Email */}
      <div>
        <p className="label mb-5 text-white/40">Escribime</p>
        <a href={`mailto:${contactEmail}`} className="btn-primary">
          <Mail size={17} strokeWidth={1.75} />
          {contactEmail}
        </a>
      </div>

      {/* WhatsApp */}
      <div>
        <p className="label mb-5 text-white/40">O por WhatsApp</p>
        <a
          href={whatsappContact.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#25D366] px-8 py-4 text-sm font-bold uppercase tracking-label text-ink transition-all duration-200 hover:-translate-y-px hover:bg-[#1FBF5C]"
        >
          <svg viewBox="0 0 32 32" width="17" height="17" fill="currentColor" aria-hidden="true">
            <path d="M16.004 2.667c-7.363 0-13.333 5.97-13.333 13.333 0 2.353.615 4.56 1.69 6.475L2.667 29.333l7.03-1.844a13.27 13.27 0 0 0 6.307 1.607h.006c7.362 0 13.333-5.97 13.333-13.333S23.366 2.667 16.004 2.667zm0 24.397a11.04 11.04 0 0 1-5.63-1.54l-.404-.24-4.174 1.095 1.114-4.07-.263-.418a11.03 11.03 0 0 1-1.69-5.891c0-6.098 4.963-11.06 11.05-11.06 2.953 0 5.727 1.15 7.815 3.24a10.986 10.986 0 0 1 3.238 7.822c0 6.098-4.963 11.06-11.056 11.06zm6.062-8.283c-.332-.166-1.965-.97-2.27-1.08-.305-.111-.526-.166-.748.166-.221.332-.858 1.08-1.052 1.302-.194.222-.388.25-.72.083-.332-.166-1.401-.516-2.669-1.646-.987-.88-1.654-1.967-1.848-2.299-.194-.332-.02-.512.146-.677.15-.15.332-.388.498-.582.166-.194.221-.332.332-.554.111-.222.055-.416-.028-.582-.083-.166-.748-1.804-1.025-2.47-.27-.649-.545-.561-.748-.572-.194-.01-.416-.012-.638-.012a1.225 1.225 0 0 0-.887.416c-.305.332-1.163 1.137-1.163 2.773s1.191 3.218 1.357 3.44c.166.222 2.343 3.577 5.678 5.015.793.343 1.412.548 1.894.7.796.253 1.52.217 2.093.132.638-.095 1.965-.803 2.242-1.58.277-.776.277-1.44.194-1.58-.083-.14-.305-.222-.638-.388z" />
          </svg>
          {whatsappContact.displayPhone}
        </a>
      </div>
    </div>
  );
}
