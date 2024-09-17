import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const blogs = [
    {
        "id": "103585bf-0976-80a1-98c8-ece134b9ea2e",
        "createdDate": "2024-09-16T19:27:00.000Z",
        "title": "React",
        "urlPath": "react",
        "tags": [
            "Frontend",
            "Notes"
        ],
        "blocks": [
            {
                "component": "Heading1",
                "text": "Overview"
            },
            {
                "component": "Paragraph",
                "text": "React hooks provide the features and benefits to functional components that would normally require classes"
            },
            {
                "component": "Paragraph",
                "text": "Always start with word use and return a value, object, or array"
            },
            {
                "component": "Paragraph",
                "text": "hooks can only be accessed by React functional components or other React hooks"
            },
            {
                "component": "Heading1",
                "text": "Hooks"
            },
            {
                "component": "Paragraph",
                "text": "useEffect "
            },
            {
                "component": "Paragraph",
                "text": "useRef"
            },
            {
                "component": "Paragraph",
                "text": "useState"
            }
        ]
    },
    {
        "id": "b256f263-bdda-4a33-90b0-5d9ca64d6f34",
        "createdDate": "2024-09-16T16:29:00.000Z",
        "title": "Notion as a CMS",
        "urlPath": "notion-blog",
        "tags": [
            "API",
            "Notion",
            "Tutorial"
        ],
        "blocks": [
            {
                "component": "Heading1",
                "text": "Overview"
            },
            {
                "component": "Paragraph",
                "text": "This is a test"
            }
        ]
    }
]

export const GET: RequestHandler = () => {
    return json(blogs);
};


