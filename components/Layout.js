import Head from "next/head";

export function Layout({ children }) {
	return (
		<main className="layout">
			<Head>
				<title>NextJS | Gerenciamento de Usuários</title>
			</Head>
			comeca
			{children}
			termina
		</main>
	);
}
