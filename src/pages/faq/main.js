import React from 'react';
import { AppLayout } from '../../layouts';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import { Header } from '../../components/section';
import { Helmet } from 'react-helmet';
import ReactHtmlParser from 'react-html-parser';

import './index.css';

export const Faq = () => {
	const aboutcot = [
		{
			key: 1,
			question: `What are the benefits that Associations can get from	the CoT?`,
			answer: `Lobbying and Advocacy services, Membership, Capacity building,
			Business opportunities among others.`,
		},
		{
			key: 2,
			question: `What are the requirements to become a member of the Go Discover Africa?`,
			answer: `In order to become a member of COT, a number of requirements should be observed depending on the type of Association. Please visit individual Association’s websites to apply for the membership. <a href="https://www.cot.org.rw/members/join" 	aria-label='requirements to become a member'
			rel='noopener noreferrer'> Get the requirements</a>`,
		},
		{
			key: 3,
			question: `How do we pay the membership fee?`,
			answer: `It is paid through Associations’  bank accounts.`,
		},
		{
			key: 4,
			question: `How many associations fall under the Go Discover Africa?`,
			answer: `
			<b>Go Discover Africa is currently composed by 6 Associations</b> 
			<ul>
			<li>Rwanda Hospitality Association </li>
			<li>Rwanda Tour & Travel Association </li>
			<li>Rwanda Association of Travel Agencies</li>
			<li>Rwanda Hospitality and Tourism Educators Association</li>
	  	<li>Rwanda Safari Guides Association</li>
	  	<li>Rwanda Community Tourism Association</li>
			</ul>
			`,
		},
		{
			key: 5,
			question: `Is there any difference between CoT and RDB?`,
			answer: `The CoT is the apex body for all private sector tourism and hospitality establishments in Rwanda. It was established in 2006, with a mandate of enhancing business opportunities through effective lobbying and advocacy for the tourism and hospitality industry in Rwanda. <br/>  On the other hand, Rwanda Development Board (RDB) is a government institution whose mandate is to accelerate Rwanda’s economic development by enabling private sector growth. It is under the supervision of the Office of the President and is governed by a Board of Directors made up of global entrepreneurs and experts. RDB was established in 2008 out of a merger of 8 Government institutions, primarily to create a One Stop Shop for business and investments. RDB has been built with global expertise and modelled on international best practice.
			`,
		},
		// hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
	];

	const aboutRDB = [
		// {
		// 	key: 6,
		// 	question: `How do I contact RDB to make a reservation?`,
		// 	answer: `
		// 	<ul>
		// 		<li>Email: reservation@rwandatourism.com  or</li>
		// 		<li>Phone: +250 252 57 65 14 or their hotline number 1415 </li>
		// 	</ul>
		// 	`,
		// },
		{
			key: 7,
			question: `What has been the role of CoT in helping out member Associations during COVID 19  period?`,
			answer: `The CoT carried out various advocacies for member Associations either to the Government (establishment of economic recovery fund, negotiation with banks for loan rescheduling…) or other international supporters in order to revive the industry (various projects).`,
		},
		// {
		// 	key: 8,
		// 	question: `Are there any financial advisors during this pandemic?`,
		// 	answer: `Approach their banks for analysis and advices`,
		// },
		{
			key: 9,
			question: `Is there any support related to HR management during this pandemic`,
			answer: `COVID 19 period should not be taken as a useless period, a lot can be done with regards to staff in the T & H sector. Most importantly,  employers should not just lay them down  without considering other options like training, rotations. <br/> The Go Discover Africa is always available to its members for advice and advocacy.`,
		},
		{
			key: 10,
			question: `What are the requirements for a hotel to appear on the list of designated hotels?`,
			answer: `GODISCOVER AFRICAmembers wo need this kind of information please call RDB hotline 1415 to get related information.`,
		},
		{
			key: 11,
			question: `Can you share information related to hotel grading and classification?`,
			answer: `Accommodation entities and restaurants are graded according to the EAC grading standards.  For more details, please call RDB hotline 1415.`,
		},
	];

	const investors = [
		{
			key: 12,
			question: `What are the regulations governing investment in the T&H in Rwanda?`,
			answer: `Rwanda Development board is mandated to accelerate Rwanda’s economic development by enabling private sector and investment growth. For more details please call RDB hotline 1415 and visit <a href="https://rdb.rw" aria-label='RDB website'
			rel='noopener noreferrer' target="_blank">https://rdb.rw/</a>`,
		},
		{
			key: 13,
			question: `What is a Tourism entity?`,
			answer: `It is a tourism business enterprise which consists of a restaurant, bar, night club, accommodation establishment, tour operator, tour guide, tourism information office or centre, cultural tourism recognized by the Institute of National Museums of Rwanda and any other entity as may be determined by Ministerial Order. `,
		},
		{
			key: 14,
			question: `Is there an application fee for the tourism license?`,
			answer: `Yes, tourism entities must pay an application fee of RWF 80,000. An application is considered incomplete until the applicant has paid the application fee. For more information, please call RDB hotline 1415.`,
		},
		{
			key: 15,
			question: `What are the required documents does an applicant need to submit when applying for a tourism operating license?`,
			answer: `For more details please call RDB hotline 1415 and visit <a href="https://rdb.rw" aria-label='RDB website'
			rel='noopener noreferrer' target="_blank">https://rdb.rw/</a>`,
		},
		// {
		// 	key: 16,
		// 	question: `For how long will a tourism operating license be valid?`,
		// 	answer: `License does not expire, but entity must pass annual inspections to maintain its license. RDB may suspend/cancel a license if an entity is found to be operating below minimum standards or in violation of the Tourism Law.`,
		// },
		// {
		// 	key: 17,
		// 	question: `What is the application procedure?`,
		// 	answer: `<p>A person seeking a license to operate will submit an online application to RDB and  pay an application fee of 80,000 Rwf </p>
		//     <p>	RDB will review the application, and the application is complete, an inspection will be scheduled</p>
		//   <p>	An authorized RDB inspector will conduct inspection at the tourism entity’s premises, and if the entity passes inspection, it is granted its license
		// 	 					If there are issues identified during inspection, the tourism entity is asked to fix those issues before it can be granted a license. In this case, the tourism entity will be subject to re-inspection.</p>
		// 	`,
		// },
		// {
		// 	key: 18,
		// 	question: `Who can apply for a tourism operating license?`,
		// 	answer: `<ol type="a">
		// 	<li>Accommodation establishments </li><li>
		// 	Restaurants, bars and nightclubs</li><li>
		// 	Tour operators, tour guide and travel agents </li><li>
		// 	Tourism information centers </li><li>
		// 	Museum and Cultural tourism
		// 	</li>
		// 	</ol>`,
		// },
	];

	const aboutTourism = [
		{
			key: 19,
			question: `How can someone access accommodation  sites across the country?`,
			answer: `Please call Go Discover Africa  hotline 8181 or reach out to Rwanda Hospitality Association  (RHA) website  <a href="https://rha.rw" aria-label='RHA website'
			rel='noopener noreferrer' target="_blank">https://rha.rw/</a>`,
		},
		// {
		// 	key: 20,
		// 	question: `What are the main tourism products of interest in Rwanda and their average costs?`,
		// 	answer: `A brief description about Rwanda as a tourism destination (location, climate, size, some of the amenities [hotels, mountain gorillas, Flora and Fauna, culture tourism…)`,
		// },
		{
			key: 21,
			question: `When is it best to visit and where to stay?`,
			answer: `Rwanda as a destination, can be visited all year around, its parks are accessible throughout the year and all other destinations are readily available throughout the year. However, let’s note that there are two rainy seasons which start from March to end May and the other one from September to December others months are sunny. `,
		},

		{
			key: 26,
			question: `In the event my COVID-19 results are delayed, what happens? Who pays the additional waiting nights/days and if I had a tourism booking, do I get a refund?`,
			answer: `Each hotel will have a site manager who will advise on the results within the allotted time. The Rwanda Development Board reservations team <b>(reservations@rdb.rw)</b> can facilitate the rescheduling of booked permits in case of any issue related to the COVID-19 pandemic in line with the revised booking policy.`,
		},
		{
			key: 27,
			question: `Can I continue to stay in the same hotel after receiving my test results?`,
			answer: `The Government of Rwanda has negotiated special rates at the designated hotels for the waiting period. Should a guest wish to remain in the hotel after receiving a negative test result, they are welcome to extend their stay at the hotel’s regular rates; however, they will be assigned a new room.`,
		},
		{
			key: 28,
			question: `How can I access the economic recovery fund?`,
			answer: `
			As of June 8, 2020 eligible businesses will be able to apply for funding under the Economic Recovery Fund (ERF), a two-year facility established by the Government to cushion businesses affected by the COVID-19 Pandemic. More information can be found here: <a href="https://bit.ly/2RNWxG3" target="_blank" 	aria-label='Economic recovery'
			rel='noopener noreferrer'>https://bit.ly/2RNWxG3</a>
			`,
		},
		{
			key: 29,
			question: `Is there any tax exoneration on tourism entities during  COVID 19 pandemic?`,
			answer: `Refer Them to RRA customer care line 3004`,
		},
	];

	const aboutCovid = [
		{
			key: 30,
			question: `If I tested negative for COVID-19 on arrival in Rwanda and will spend less than 120 hours in the country, do I need to take another test to depart from Rwanda?`,
			answer: `Please refer to this	<a href="https://www.rbc.gov.rw." aria-label='rbc'
			rel='noopener noreferrer' target="_blank">www.rbc.gov.rw.</a>
			`,
		},
		{
			key: 31,
			question: `While I am waiting for my COVID19 test results at a designated hotel, can I be visited by friends?`,
			answer: `No. Guests waiting for their results at designated hotels are required to remain in isolation. They are welcome to use electronic devices while at the hotel but must respect the privacy of other guests at all times. more information refer <a href="https://www.rbc.gov.rw." aria-label='rbc'
			rel='noopener noreferrer' target="_blank">www.rbc.gov.rw.</a>
			`,
		},
		{
			key: 32,
			question: `In the event my COVID-19 results are delayed, what happens? Who pays the additional waiting nights/days and if I had a tourism booking, do I get a refund?`,
			answer: `Each hotel will have a site manager who will advise on the results within the allotted time. The Rwanda Development Board reservations team <b>(reservations@rdb.rw)</b>can facilitate the rescheduling of booked permits in case of any issue related to the COVID-19 pandemic in line with the revised booking policy.`,
		},
		{
			key: 33,
			question: `Can I continue to stay in the same hotel after receiving my test results?`,
			answer: `The Government of Rwanda has negotiated special rates at the designated hotels for the waiting period. Should a guest wish to remain in the hotel after receiving a negative test result, they are welcome to extend their stay at the hotel’s regular rates; however, they will be assigned a new room.`,
		},
		{
			key: 34,
			question: `What has been the role of CoT in helping out member Associations during COVID 19  period?`,
			answer: `The CoT carried out various advocacies for member Associations either to the Government (establishment of economic recovery fund, negotiation with banks for loan rescheduling…) or other international supporters in order to revive the industry (various projects).`,
		},
		{
			key: 35,
			question: `Is there any support related to HR management during this pandemic?`,
			answer: `COVID 19 period should not be taken as a useless period, a lot can be done with regards to staff in the T & H sector. Most importantly,  employers should not just lay them down  without considering other options like training, rotations...`,
		},
		{
			key: 36,
			question: `Is it mandatory to take a COVID-19 test before departure from Rwanda?`,
			answer: `All travellers departing from Rwanda must test negative for COVID-19. The only accepted test is a SARS-CoV 2 Real Time Polymerase Chain Reaction (RT-PCR) performed within 120 hours before departure. Other tests, such as Rapid Diagnostics Test (RDTs), are not accepted. We encourage travellers to book and pay for their tests at least 2 days prior to departure through the online platform available on <a href="https://www.rbc.gov.rw." aria-label='rbc'
			rel='noopener noreferrer' target="_blank">www.rbc.gov.rw.</a> 
			Guests will be facilitated to take this final test in popular tourist locations including Musanze, Nyagatare, Nyamasheke, Rwamagana and Rubavu. Visitors can also be tested in Kigali at Amahoro Stadium “Petit Stade” in Remera and the Rwanda Biomedical Centre Gikondo Branch at the Office of Vaccination Programme on KK 6 Ave. The cost of the test is USD 50. More details and payment methods can be found here.`,
		},
		// {
		// 	key: 37,
		// 	question: `Is there any tax exoneration on tourism entities during  COVID 19 pandemic?`,
		// 	answer: `Refer Them to RRA customer care line 3004.`,
		// },
		{
			key: 38,
			question: `As a business owner in the hospitality and tourism sector, what am I requested to open again as businesses are now allowed to open?`,
			answer: `First read the instructions published by RDB regarding all types of business falling under the T & H sector. May 2020`,
		},
		{
			key: 39,
			question: `What are the sanctions an entity can face if they do not abide by COVID 19 prevention measures?`,
			answer: `There are various measures taken by the government of Rwanda to control COVID 19 pandemic and some sanctions including fines and permanent closure of entities have been put in place. <a href="https://www.gov.rw/koronavirusi/" 	aria-label='gov'
			rel='noopener noreferrer' target="_blank">https://www.gov.rw/koronavirusi/</a> `,
		},
	];
	return (
		<AppLayout>
			<Helmet>
				<meta charSet='utf-8' />
				<title>FAQ | Go Discover Africa</title>
				<link rel='canonical' href='https://godiscoverafrica.rw//faq' />
				<meta
					name='description'
					content='Go Discover Africa (COT) Frequently Asked Questions (FAQs)'
				/>
			</Helmet>
			<br />
			<Header className='py-2 title' title='Frequently Asked Questions (FAQs)' />
			<section className='mt-2 mb-5 faq'>
				<Container>
					<Row>
						<Col sm={12}>
							<Card>
								<Card.Header>
									<h4 className='title py-2'>QUESTIONS ABOUT CoT (Members)</h4>
								</Card.Header>
								{/* <br /> */}
								{aboutcot &&
									aboutcot.map((item, i) => (
										<Card.Body>
											<Accordion defaultActiveKey='0'>
												{/* <Card> */}
												<Accordion.Toggle
													as={Card.Header}
													style={{ marginBottom: '-15px' }}
													eventKey={item.key}
												>
													<p className='title'>
														<i class='fa fa-caret-right' aria-hidden='true'></i>{' '}
														<b> {item.question}</b>
													</p>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey={item.key}>
													<Card.Body className='text-normal'>
														{ReactHtmlParser(item.answer)}
													</Card.Body>
												</Accordion.Collapse>
											</Accordion>
										</Card.Body>
									))}
								{/* about RDB */}
								{/* <Card.Header>
									<h4 className='title py-2 mt-4'>QUESTIONS ABOUT RDB</h4>
								</Card.Header> */}
								{/* <br /> */}
								{aboutRDB &&
									aboutRDB.map((item, i) => (
										<Card.Body>
											<Accordion defaultActiveKey='0'>
												{/* <Card> */}
												<Accordion.Toggle
													as={Card.Header}
													style={{ marginBottom: '-15px' }}
													eventKey={item.key}
												>
													<p className='title'>
														<i class='fa fa-caret-right' aria-hidden='true'></i>{' '}
														<b> {item.question}</b>
													</p>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey={item.key}>
													<Card.Body className='text-normal'>
														{ReactHtmlParser(item.answer)}
													</Card.Body>
												</Accordion.Collapse>
											</Accordion>
										</Card.Body>
									))}
								{/* About Tourism */}
								<Card.Header>
									<h4 className='title py-2 mt-4'>QUESTIONS ABOUT TOURISM</h4>
								</Card.Header>
								{/* <br /> */}
								{aboutTourism &&
									aboutTourism.map((item, i) => (
										<Card.Body>
											<Accordion defaultActiveKey='0'>
												{/* <Card> */}
												<Accordion.Toggle
													as={Card.Header}
													style={{ marginBottom: '-15px' }}
													eventKey={item.key}
												>
													<p className='title'>
														<i class='fa fa-caret-right' aria-hidden='true'></i>{' '}
														<b> {item.question}</b>
													</p>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey={item.key}>
													<Card.Body className='text-normal'>
														{ReactHtmlParser(item.answer)}
													</Card.Body>
												</Accordion.Collapse>
											</Accordion>
										</Card.Body>
									))}
								{/*About Investors */}
								<Card.Header>
									<h4 className='title py-2 mt-4'>QUESTIONS ABOUT INVESTORS</h4>
								</Card.Header>
								{/* <br /> */}
								{investors &&
									investors.map((item, i) => (
										<Card.Body>
											<Accordion defaultActiveKey='0'>
												{/* <Card> */}
												<Accordion.Toggle
													as={Card.Header}
													style={{ marginBottom: '-15px' }}
													eventKey={item.key}
												>
													<p className='title'>
														<i class='fa fa-caret-right' aria-hidden='true'></i>{' '}
														<b> {item.question}</b>
													</p>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey={item.key}>
													<Card.Body className='text-normal'>
														{ReactHtmlParser(item.answer)}
													</Card.Body>
												</Accordion.Collapse>
											</Accordion>
										</Card.Body>
									))}

								{/* about COVID */}
								<Card.Header>
									<h4 className='title py-2 mt-4'>QUESTIONS ABOUT COVID-19</h4>
								</Card.Header>
								{/* <br /> */}
								{aboutCovid &&
									aboutCovid.map((item, i) => (
										<Card.Body>
											<Accordion defaultActiveKey='0'>
												{/* <Card> */}
												<Accordion.Toggle
													as={Card.Header}
													style={{ marginBottom: '-15px' }}
													eventKey={item.key}
												>
													<p className='title'>
														<i class='fa fa-caret-right' aria-hidden='true'></i>{' '}
														<b> {item.question}</b>
													</p>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey={item.key}>
													<Card.Body className='text-normal'>
														{ReactHtmlParser(item.answer)}
													</Card.Body>
												</Accordion.Collapse>
											</Accordion>
										</Card.Body>
									))}
							</Card>
						</Col>
					</Row>
				</Container>
			</section>
		</AppLayout>
	);
};
