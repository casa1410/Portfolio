import translater from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"
// LANGUAGE EN
import contactEN from "@/translations/en/contact.json"
import experienceEN from "@/translations/en/experience.json"
import generalEN from "@/translations/en/general.json"
import layoutEN from "@/translations/en/layout.json"
import projectsEN from "@/translations/en/projects.json"
import skillsEN from "@/translations/en/skills.json"
// LANGUAGE ES
import contactES from "@/translations/es/contact.json"
import experienceES from "@/translations/es/experience.json"
import generalES from "@/translations/es/general.json"
import layoutES from "@/translations/es/layout.json"
import projectsES from "@/translations/es/projects.json"
import skillsES from "@/translations/es/skills.json"

translater
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			es: {
				contact: contactES,
				experience: experienceES,
				general: generalES,
				layout: layoutES,
				projects: projectsES,
				skills: skillsES,
			},
			en: {
				contact: contactEN,
				experience: experienceEN,
				general: generalEN,
				layout: layoutEN,
				projects: projectsEN,
				skills: skillsEN,
			},
		},
		lng: "en",
		fallbackLng: "en",
		interpolation: {
			escapeValue: false,
		},
	})

export default translater
