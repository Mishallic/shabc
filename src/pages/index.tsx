import { LatestProducts } from '@/features/landing/components/latest-products';
import { ContentLayout } from '@/layouts/content-layout';
import { DashboardLayout } from '@/layouts/dashboard-layout';
import localFont from 'next/font/local';
import Image from 'next/image';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export default function Home() {
	return (
		<div>

			<DashboardLayout>
				<ContentLayout title='Home'>
					Welcome to ABC

					<LatestProducts/>
				</ContentLayout>
			</DashboardLayout>
		</div>
	);
}
