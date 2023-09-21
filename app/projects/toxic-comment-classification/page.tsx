import PageTemplate from '@/app/components/PageTemplate';
import BigCard from '@/app/components/BigCard';
import styles from './style.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { prefix } from '@/app/prefix';

export default function ToxicCommentClassification() {
	return (
		<PageTemplate
			backNavLink="/projects"
			backNav="Projects"
			heading="Toxic Comment Classification"
			content={
				<BigCard
					content={
						<div className={styles.content}>
							<h2>🔗 Links</h2>
							<hr />
							<ul>
								<li>
									<Link
										href="https://github.com/acmucsd-projects/wi23-ai-team-1"
										target="_blank"
										rel="noopener noreferrer"
										className={styles.link}
									>
										GitHub repo
									</Link>
								</li>
							</ul>

							<br />

							<h2>🖼️ Images</h2>
							<hr />
							<div className={styles.images}>
								<div className={styles.toxicTagFreqContainer}>
									<Image
										fill={true}
										src={`${prefix}/projects/toxic-comment-classification/toxic-tag-freq.png`}
										alt="Toxic tag frequency percentages"
									/>
								</div>
								<div className={styles.classImbalanceContainer}>
									<Image
										fill={true}
										src={`${prefix}/projects/toxic-comment-classification/class-imbalance.png`}
										alt="Class imbalance"
									/>
								</div>
								<div className={styles.dataContainer}>
									<Image
										fill={true}
										src={`${prefix}/projects/toxic-comment-classification/data.png`}
										alt="Data"
									/>
								</div>
								<div className={styles.modelContainer}>
									<Image
										fill={true}
										src={`${prefix}/projects/toxic-comment-classification/model.png`}
										alt="Deep learning model"
									/>
								</div>
							</div>

							<br />

							<h2>📚 Description</h2>
							<hr />
							<p>
								<b>Background: </b>
								In winter 2023, I participated in ACM AI Projects, a quarter-long program
								organized by ACM at UC San Diego where teams of students complete an AI
								project of their choice. I collaborated with 5 other students and a student
								mentor to build a deep learning model that identifies toxic online comments.
								This was my very first introduction to machine learning.
							</p>
							<p>
								<b>Project Details: </b>
								We downloaded our training data from the&nbsp;
								<Link href="/experience/acm-ucsd" className={styles.link}>
									Toxic Comment Classification Challenge
								</Link>
								&nbsp;on Kaggle. We first cleaned our data by removing stopwords such as
								"the" using NLTK and preprocessed it with text vectorization. We then
								spent a long time experimenting with the model by adding different kinds
								of layers, such as MaxPooling1D, BatchNormalization, LSTM, Dropout, and
								more.
							</p>
							<p>
								A challenge we faced during the project was class imbalance, since our data
								contained many more non-toxic comments than toxic comments. To fix this and
								prevent bias towards the majority class, we oversampled from the minority
								groups using imblearn.over_sampling. Our initial model only had around 50%
								overall accuracy, while our final model had around 90%.
							</p>
						</div>
					}
				/>
			}
		/>
	);
};