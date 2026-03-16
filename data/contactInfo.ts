import { Mail, MapPin, Phone } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface ContactInfo {
    icon: LucideIcon,
    label: string,
    value: string
}

export const contactInfo: ContactInfo[] = [
    {
        icon: MapPin,
        label: "Address",
        value: "Shop 12, Zamzama Boulevard, Karachi, Pakistan",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+92 300 1234567",
    },
    {
        icon: Mail,
        label: "Email",
        value: "hello@nextstep.pk",
    },
]