// PAKET-P6 A1: TR sözlüğü (transformation). Tip ve dilden bağımsız sabitler: content/transformation.ts.
import type { TransformationContent } from '../transformation';

export const transformation: TransformationContent = {
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
};
