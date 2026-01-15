/** Icons */
import ApiIcon from "@/icons/activity.svg";
import TokenIcon from "@/icons/logs.svg";
import CostIcon from "@/icons/credit-card.svg";
import ErrorIcon from "@/icons/error.svg";

/** Cards Data */
export const CardData = [
    {
        title: "API Requests",
        value: "1.24M",
        change: "+12% from yesterday",
        icon: <ApiIcon />,
        color: "#6D5DFC",
    },
    {
        title: "AI Cost",
        value: "$12,430",
        change: "+$1,200 today",
        icon: <CostIcon />,
        color: "#6D5DFC",
    },
    {
        title: "Tokens Used",
        value: "87.3M",
        change: "+8% this week",
        icon: <TokenIcon />,
        color: "#6D5DFC",
    },
    {
        title: "Errors",
        value: "0.23%",
        change: "Down from 0.5%",
        icon: <ErrorIcon />,
        color: "#EF4444",
    },
];

/** Usage Data for Chart */
export const usageData = [
    { day: "Mon", requests: 120000, tokens: 8.2 },
    { day: "Tue", requests: 180000, tokens: 12.4 },
    { day: "Wed", requests: 160000, tokens: 10.9 },
    { day: "Thu", requests: 210000, tokens: 14.7 },
    { day: "Fri", requests: 240000, tokens: 18.1 },
    { day: "Sat", requests: 190000, tokens: 13.2 },
    { day: "Sun", requests: 220000, tokens: 16.5 },
];


/** Model Performance Data */
export const modelPerformance = [
    {
        model: "GPT-4",
        requests: 420000,
        latency: 820,
        errors: 0.12,
        cost: 8200,
    },
    {
        model: "GPT-3.5",
        requests: 610000,
        latency: 430,
        errors: 0.05,
        cost: 2800,
    },
    {
        model: "Embeddings",
        requests: 320000,
        latency: 210,
        errors: 0.02,
        cost: 950,
    },
    {
        model: "Vision",
        requests: 140000,
        latency: 1200,
        errors: 0.28,
        cost: 480,
    },
]
    ;