/**
 * PAKET-P3-WEBFACTORY-DONUSUM G3. TEK HAT DATA → AI → SYSTEMS → AUTONOMY (CD #4). Metin brief'ten,
 * Emre onaylı TR; aşama etiketleri CD kararıyla EN büyük harf. Sıra sabit.
 * PAKET-P5-SEO-META-DIL G2: `{ tr, en }`. EN aşama başlık/açıklamaları ve alıntı mevcut siteden
 * (ICERIK-ENVANTERI "4 Faz"); eyebrow ve H2 yeni çeviri.
 */
import type { Localized } from './locale';

export type TransformationStage = {
    label: string;
    title: string;
    description: string;
};

type TransformationContent = {
    section: { eyebrow: string; heading: string; quote: string };
    stages: TransformationStage[];
};

export const transformationContent: Localized<TransformationContent> = {
    tr: {
        section: {
            eyebrow: 'DİJİTAL DÖNÜŞÜM',
            heading: 'Dönüşüm bir tercih değil, rekabet avantajıdır.',
            quote: 'Ölçemeyen yönetemez; yönetemeyen rekabet edemez.'
        },
        stages: [
            {
                label: 'DATA',
                title: 'Algoritma evrimi',
                description: 'Yapay zekâ algoritmaları gelişir, büyük veri işlenir, öngörü ve analiz kapasitesi büyür.'
            },
            {
                label: 'AI',
                title: 'Araçların sistemlere uyarlanması',
                description: 'AI ajan sistemleri devreye girer, şirkete özel çözümler geliştirilir, süreç bazlı otomasyonlar canlıya alınır.'
            },
            {
                label: 'SYSTEMS',
                title: 'Donanım ve AI entegrasyonu',
                description: 'IoT ve akıllı sensörler devreye girer, gerçek zamanlı veri akışı kurulur, dijital ve fiziksel dünya bütünleşir.'
            },
            {
                label: 'AUTONOMY',
                title: 'Otonom ve bağlı sistemler',
                description: 'Sistemler birbiriyle konuşur, operasyonlar otonom yönetilir, stratejiyle uyumlu sonuçlar üretilir.'
            }
        ]
    },
    en: {
        section: {
            eyebrow: 'DIGITAL TRANSFORMATION',
            heading: "Transformation isn't a choice; it's a competitive edge.",
            quote: 'Businesses that cannot measure cannot manage; businesses that cannot manage cannot compete.'
        },
        stages: [
            {
                label: 'DATA',
                title: 'Algorithm Evolution',
                description: 'AI algorithms evolve, big data is processed, predictive and analytical capabilities grow.'
            },
            {
                label: 'AI',
                title: 'Adapting AI Tools to Systems',
                description: 'AI agent systems emerge, company-specific solutions are developed, process-based automations go live.'
            },
            {
                label: 'SYSTEMS',
                title: 'Hardware & AI Integration',
                description: 'IoT and smart sensors come online, real-time data flows are established, digital and physical worlds integrate.'
            },
            {
                label: 'AUTONOMY',
                title: 'Autonomous & Connected Systems',
                description: 'Systems communicate with each other, operations are managed autonomously, strategy-aligned outcomes are produced.'
            }
        ]
    }
};
