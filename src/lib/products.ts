export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  badge?: string;
  features: string[];
  popular?: boolean;
};

export const products: Product[] = [
  {
    id: "starter-kit",
    name: "Funnel Starter Kit",
    description:
      "ชุดเทมเพลตสำหรับทำ Sales Funnel ครบชุด พร้อมหน้า Landing, Checkout และ Success",
    price: 990,
    currency: "THB",
    badge: "เหมาะสำหรับเริ่มต้น",
    features: [
      "หน้า Landing Page ออกแบบระดับมืออาชีพ",
      "ชุดคอมโพเนนต์พร้อมใช้ใน Next.js + Tailwind",
      "รองรับการเชื่อมต่อกับ Payment Gateway ภายหลัง",
      "รวม License ใช้กับโปรเจกต์ได้ไม่จำกัด",
    ],
  },
  {
    id: "pro-bundle",
    name: "Funnel Pro Bundle",
    description:
      "แพ็กเกจรวม Template, Component, Section และ Flow การขายครบทั้งระบบ",
    price: 2990,
    currency: "THB",
    badge: "ขายดี",
    popular: true,
    features: [
      "ชุด Landing Page หลาย Layout",
      "Flow Checkout + Order Success Page",
      "Section สำหรับอธิบาย Product / Bonus / Guarantee",
      "ไฟล์ออกแบบ + Source Code พร้อมปรับแต่ง",
    ],
  },
  {
    id: "agency-license",
    name: "Agency License",
    description:
      "ไลเซนส์สำหรับเอเจนซี รับทำ Funnel ให้ลูกค้าได้หลายแบรนด์แบบถูกลิขสิทธิ์",
    price: 8990,
    currency: "THB",
    badge: "สำหรับเอเจนซี",
    features: [
      "สิทธิ์ใช้งานกับลูกค้าได้ไม่จำกัดจำนวนโปรเจกต์",
      "Template เพิ่มเติมสำหรับ B2B / SaaS / Info Product",
      "ไฟล์ Design System และ UI Library เต็มชุด",
      "สิทธิ์อัปเดตเวอร์ชันใหม่ตลอดอายุการใช้งาน",
    ],
  },
];

export const getProductById = (id: string): Product | undefined =>
  products.find((p) => p.id === id);

