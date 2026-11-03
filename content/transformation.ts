/**
 * PAKET-P3-WEBFACTORY-DONUSUM G3. TEK HAT DATA → AI → SYSTEMS → AUTONOMY (CD #4). Metin brief'ten,
 * Emre onaylı TR; aşama etiketleri CD kararıyla EN büyük harf. Sıra sabit.
 */

export const transformationSection = {
    eyebrow: 'DİJİTAL DÖNÜŞÜM',
    heading: 'Dönüşüm bir tercih değil, rekabet avantajıdır.',
    quote: 'Ölçemeyen yönetemez; yönetemeyen rekabet edemez.'
} as const;

export type TransformationStage = {
    label: string;
    title: string;
    description: string;
};

export const transformationStages: TransformationStage[] = [
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
];
