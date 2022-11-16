module.exports = {
	stylesheet: ['https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css'],
	css: `.page-break { page-break-after: always; }
    .markdown-body { font-size: 15px; }
    .markdown-body pre > code { white-space: pre-wrap; }`,
	body_class: 'markdown-body',
	marked_options: {
		headerIds: false,
		smartypants: true,
	},
	pdf_options: {
		format: 'A3',
		margin: '20mm',
		printBackground: true,
	},
	stylesheet_encoding: 'utf-8',
    dest: 'assets/docs/whitepaper-generated.pdf'
};