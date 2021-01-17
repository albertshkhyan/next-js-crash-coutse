import Router from "next/router";

import MainLayout from "../../components/MainLayout";

export default function About({ title }) {
	//Router is special object for navigate programmatically
	const handleGoBack = () => {
		Router.push("/");
	};
	return (
		<MainLayout title="About page">
			<h1>About page - {JSON.stringify(title)}</h1>

			<button onClick={handleGoBack}>Go back to home</button>
		</MainLayout>
	);
}

About.getInitialProps = async () => {
	//mock delay
	const response = await fetch(`${process.env.API_URL}/about`);
	const data = await response.json();

	return {
		title: data.title,
	};
};
