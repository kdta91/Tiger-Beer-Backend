const mongoose = require('mongoose');
const SitePrizeAllocation = require('../models/site-prize-allocation');

// exports.create_site_prize_allocation = (req, res, next) => {
//     let allocations = [
//         //5c297aacbc7304070c91b717
//         [{
//                 "siteId": "5c297aacbc7304070c91b717",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b717",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b717",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b717",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b717",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b717",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         //5c297aacbc7304070c91b718
//         [{
//                 "siteId": "5c297aacbc7304070c91b718",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b718",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b718",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b718",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b718",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b718",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         //5c297aacbc7304070c91b719
//         [{
//                 "siteId": "5c297aacbc7304070c91b719",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b719",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b719",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b719",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b719",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b719",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         //5c297aacbc7304070c91b71b
//         [{
//                 "siteId": "5c297aacbc7304070c91b71b",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b71b",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b71b",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b71b",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b71b",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b71b",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b71a"
//         [{
//                 "siteId": "5c297aacbc7304070c91b71a",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b71a",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b71a",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b71a",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b71a",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b71a",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b71d"
//         [{
//                 "siteId": "5c297aacbc7304070c91b71d",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b71d",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b71d",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b71d",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b71d",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b71d",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b71e"
//         [{
//                 "siteId": "5c297aacbc7304070c91b71e",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b71e",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b71e",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b71e",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b71e",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b71e",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b71c"
//         [{
//                 "siteId": "5c297aacbc7304070c91b71c",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b71c",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b71c",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b71c",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b71c",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b71c",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b71f"
//         [{
//                 "siteId": "5c297aacbc7304070c91b71f",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b71f",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b71f",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b71f",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b71f",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b71f",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b720"
//         [{
//                 "siteId": "5c297aacbc7304070c91b720",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b720",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b720",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b720",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b720",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b720",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b722"
//         [{
//                 "siteId": "5c297aacbc7304070c91b722",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b722",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b722",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b722",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b722",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b722",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b721"
//         [{
//                 "siteId": "5c297aacbc7304070c91b721",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b721",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b721",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b721",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b721",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b721",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b723"
//         [{
//                 "siteId": "5c297aacbc7304070c91b723",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b723",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b723",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b723",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b723",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b723",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b724"
//         [{
//                 "siteId": "5c297aacbc7304070c91b724",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b724",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b724",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b724",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b724",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b724",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b725"
//         [{
//                 "siteId": "5c297aacbc7304070c91b725",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b725",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b725",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b725",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b725",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b725",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b726"
//         [{
//                 "siteId": "5c297aacbc7304070c91b726",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b726",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b726",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b726",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b726",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b726",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b727"
//         [{
//                 "siteId": "5c297aacbc7304070c91b727",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b727",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b727",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b727",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b727",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b727",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b728"
//         [{
//                 "siteId": "5c297aacbc7304070c91b728",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b728",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b728",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b728",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b728",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b728",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b729"
//         [{
//                 "siteId": "5c297aacbc7304070c91b729",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b729",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b729",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b729",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b729",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b729",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b72a"
//         [{
//                 "siteId": "5c297aacbc7304070c91b72a",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b72a",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b72a",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b72a",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b72a",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b72a",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b72b"
//         [{
//                 "siteId": "5c297aacbc7304070c91b72b",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b72b",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b72b",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b72b",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b72b",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b72b",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b72c"
//         [{
//                 "siteId": "5c297aacbc7304070c91b72c",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b72c",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b72c",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b72c",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b72c",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b72c",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b72f"
//         [{
//                 "siteId": "5c297aacbc7304070c91b72f",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b72f",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b72f",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b72f",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b72f",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b72f",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b72d"
//         [{
//                 "siteId": "5c297aacbc7304070c91b72d",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b72d",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b72d",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b72d",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b72d",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b72d",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b72e"
//         [{
//                 "siteId": "5c297aacbc7304070c91b72e",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b72e",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b72e",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b72e",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b72e",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b72e",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b730"
//         [{
//                 "siteId": "5c297aacbc7304070c91b730",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b730",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b730",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b730",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b730",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b730",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b731"
//         [{
//                 "siteId": "5c297aacbc7304070c91b731",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b731",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b731",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b731",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b731",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b731",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b734"
//         [{
//                 "siteId": "5c297aacbc7304070c91b734",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b734",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b734",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b734",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b734",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b734",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b732"
//         [{
//                 "siteId": "5c297aacbc7304070c91b732",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b732",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b732",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b732",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b732",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b732",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b733"
//         [{
//                 "siteId": "5c297aacbc7304070c91b733",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b733",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b733",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b733",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b733",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b733",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b736"
//         [{
//                 "siteId": "5c297aacbc7304070c91b736",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b736",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b736",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b736",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b736",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b736",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b735"
//         [{
//                 "siteId": "5c297aacbc7304070c91b735",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b735",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b735",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b735",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b735",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b735",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b739"
//         [{
//                 "siteId": "5c297aacbc7304070c91b739",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b739",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b739",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b739",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b739",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b739",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b738"
//         [{
//                 "siteId": "5c297aacbc7304070c91b738",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b738",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b738",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b738",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b738",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b738",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b737"
//         [{
//                 "siteId": "5c297aacbc7304070c91b737",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b737",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b737",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b737",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b737",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b737",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b73b"
//         [{
//                 "siteId": "5c297aacbc7304070c91b73b",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b73b",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b73b",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b73b",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b73b",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b73b",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b73a"
//         [{
//                 "siteId": "5c297aacbc7304070c91b73a",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b73a",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b73a",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b73a",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b73a",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b73a",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b73e"
//         [{
//                 "siteId": "5c297aacbc7304070c91b73e",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b73e",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b73e",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b73e",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b73e",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b73e",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b73d"
//         [{
//                 "siteId": "5c297aacbc7304070c91b73d",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b73d",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b73d",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b73d",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b73d",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b73d",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b73c"
//         [{
//                 "siteId": "5c297aacbc7304070c91b73c",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b73c",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b73c",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b73c",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b73c",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b73c",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b743"
//         [{
//                 "siteId": "5c297aacbc7304070c91b743",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b743",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b743",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b743",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b743",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b743",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b740"
//         [{
//                 "siteId": "5c297aacbc7304070c91b740",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b740",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b740",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b740",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b740",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b740",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b73f"
//         [{
//                 "siteId": "5c297aacbc7304070c91b73f",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b73f",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b73f",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b73f",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b73f",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b73f",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b741"
//         [{
//                 "siteId": "5c297aacbc7304070c91b741",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b741",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b741",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b741",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b741",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b741",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b742"
//         [{
//                 "siteId": "5c297aacbc7304070c91b742",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b742",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b742",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b742",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b742",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b742",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b748"
//         [{
//                 "siteId": "5c297aacbc7304070c91b748",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b748",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b748",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b748",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b748",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b748",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b745"
//         [{
//                 "siteId": "5c297aacbc7304070c91b745",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b745",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b745",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b745",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b745",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b745",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b744"
//         [{
//                 "siteId": "5c297aacbc7304070c91b744",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b744",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b744",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b744",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b744",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b744",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b746"
//         [{
//                 "siteId": "5c297aacbc7304070c91b746",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b746",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b746",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b746",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b746",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b746",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b747"
//         [{
//                 "siteId": "5c297aacbc7304070c91b747",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b747",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b747",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b747",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b747",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b747",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b74d"
//         [{
//                 "siteId": "5c297aacbc7304070c91b74d",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b74d",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b74d",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b74d",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b74d",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b74d",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b74a"
//         [{
//                 "siteId": "5c297aacbc7304070c91b74a",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b74a",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b74a",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b74a",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b74a",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b74a",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b749"
//         [{
//                 "siteId": "5c297aacbc7304070c91b749",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b749",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b749",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b749",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b749",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b749",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b74b"
//         [{
//                 "siteId": "5c297aacbc7304070c91b74b",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b74b",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b74b",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b74b",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b74b",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b74b",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b74c"
//         [{
//                 "siteId": "5c297aacbc7304070c91b74c",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b74c",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b74c",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b74c",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b74c",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b74c",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b752"
//         [{
//                 "siteId": "5c297aacbc7304070c91b752",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b752",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b752",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b752",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b752",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b752",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b74f"
//         [{
//                 "siteId": "5c297aacbc7304070c91b74f",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b74f",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b74f",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b74f",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b74f",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b74f",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b74e"
//         [{
//                 "siteId": "5c297aacbc7304070c91b74e",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b74e",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b74e",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b74e",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b74e",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b74e",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b750"
//         [{
//                 "siteId": "5c297aacbc7304070c91b750",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b750",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b750",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b750",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b750",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b750",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b751"
//         [{
//                 "siteId": "5c297aacbc7304070c91b751",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b751",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b751",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b751",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b751",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b751",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b757"
//         [{
//                 "siteId": "5c297aacbc7304070c91b757",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b757",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b757",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b757",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b757",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b757",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b754"
//         [{
//                 "siteId": "5c297aacbc7304070c91b754",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b754",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b754",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b754",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b754",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b754",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b753"
//         [{
//                 "siteId": "5c297aacbc7304070c91b753",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b753",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b753",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b753",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b753",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b753",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b755"
//         [{
//                 "siteId": "5c297aacbc7304070c91b755",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b755",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b755",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b755",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b755",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b755",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b756"
//         [{
//                 "siteId": "5c297aacbc7304070c91b756",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b756",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b756",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b756",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b756",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b756",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b759"
//         [{
//                 "siteId": "5c297aacbc7304070c91b759",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b759",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b759",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b759",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b759",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b759",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//         // "siteId": "5c297aacbc7304070c91b758"
//         [{
//                 "siteId": "5c297aacbc7304070c91b758",
//                 "prizeId": "5c1c8a5010f54c0b56361c8e",
//                 "quantityAllocated": 8,
//                 "quantityLeft": 8,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b758",
//                 "prizeId": "5c1c8a3810f54c0b56361c8d",
//                 "quantityAllocated": 10,
//                 "quantityLeft": 10,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b758",
//                 "prizeId": "5c1c8a7310f54c0b56361c8f",
//                 "quantityAllocated": 30,
//                 "quantityLeft": 30,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b758",
//                 "prizeId": "5c1c8a8910f54c0b56361c90",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b758",
//                 "prizeId": "5c1c8aa310f54c0b56361c91",
//                 "quantityAllocated": 100,
//                 "quantityLeft": 100,
//                 "odds": 0
//             },
//             {
//                 "siteId": "5c297aacbc7304070c91b758",
//                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
//                 "quantityAllocated": 20,
//                 "quantityLeft": 20,
//                 "odds": 0
//             }
//         ],
//     ];

//     allocations.forEach((allocation, index) => {
//         allocation.forEach((alloc, i) => {
//             const sitePrizeAllocation = new SitePrizeAllocation({
//                 _id: new mongoose.Types.ObjectId,
//                 prizeId: alloc.prizeId,
//                 siteId: alloc.siteId,
//                 rank: 0,
//                 quantityAllocated: alloc.quantityAllocated,
//                 quantityLeft: alloc.quantityLeft,
//                 odds: alloc.odds
//             });

//             sitePrizeAllocation.save()
//                 .then((result) => {
//                     console.log(result);
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 });
//         });
//     });
// };

exports.create_site_prize_allocation = (req, res, next) => {
    const sitePrizeAllocation = new SitePrizeAllocation({
        _id: new mongoose.Types.ObjectId,
        prizeId: req.body.prizeId,
        siteId: req.body.siteId,
        rank: req.body.rank,
        quantityAllocated: req.body.quantityAllocated,
        quantityLeft: req.body.quantityLeft,
        odds: req.body.odds
    });

    sitePrizeAllocation.save()
        .then((result) => {
            res.status(201).json({
                code: 'Success',
                message: 'Site prize allocation successfully created!'
            });
        })
        .catch((error) => {
            res.status(500).json({
                error: error
            });
        });
};

exports.get_all_site_prize_allocation = (req, res, next) => {
    SitePrizeAllocation.find()
        .select('_id prizeId siteId rank quantityAllocated quantityLeft odds createdAt updatedAt')
        .populate('prizeId siteId', 'prizeType prizeName prizeImage prizeFrame siteName geofenceLatlong siteStartDate siteEndDate')
        .exec()
        .then((results) => {
            res.status(200).json({
                count: results.length,
                sitePrizeAllocations: results.map((result) => {
                    return {
                        _id: result._id,
                        prizeId: result.prizeId,
                        siteId: result.siteId,
                        rank: result.rank,
                        quantityAllocated: result.quantityAllocated,
                        quantityLeft: result.quantityLeft,
                        odds: result.odds,
                        createdAt: result.createdAt,
                        updatedAt: result.updatedAt,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:3000/site-prize-allocation/' + result._id
                        }
                    }
                })
            });
        })
        .catch((error) => {
            res.status(500).json({
                error: error
            });
        });
};

exports.get_site_prize_allocation = (req, res, next) => {
    const id = req.params.sitePrizeAllocationId;

    SitePrizeAllocation.findById(id)
        .select('_id prizeId siteId rank quantityAllocated quantityLeft odds createdAt updatedAt')
        .populate('prizeId siteId', 'prizeType prizeName prizeImage prizeFrame siteName geofenceLatlong siteStartDate siteEndDate')
        .exec()
        .then((result) => {
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(200).json({
                    message: 'No valid entry found!'
                });
            }
        })
        .catch((error) => {
            res.status(500).json({
                error: error
            });
        });
};

exports.get_site_prize_allocation_by_site = (req, res, next) => {
    const siteId = req.params.siteId;

    SitePrizeAllocation.find({
            siteId: siteId
        })
        .select('_id prizeId siteId rank quantityAllocated quantityLeft odds createdAt updatedAt')
        .populate('prizeId siteId', 'prizeType prizeName prizeImage prizeFrame siteName geofenceLatlong siteStartDate siteEndDate')
        .exec()
        .then((result) => {
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(200).json({
                    message: 'No valid entry found!'
                });
            }
        })
        .catch((error) => {
            res.status(500).json({
                error: error
            });
        });
};

exports.update_site_prize_allocation = (req, res, next) => {
    const id = req.params.sitePrizeAllocationId;
    const updateData = {};

    for (const data of req.body) {
        updateData[data.key] = data.value;
    }

    SitePrizeAllocation.update({
            _id: id
        }, {
            $set: updateData
        }, {
            runValidators: true
        })
        .exec()
        .then((result) => {
            res.status(200).json({
                message: 'Site prize allocation successfully updated!'
            });
        })
        .catch((error) => {
            res.status(500).json({
                error: error
            });
        });
};

exports.delete_site_prize_allocation = (req, res, next) => {
    const id = req.params.sitePrizeAllocationId;

    SitePrizeAllocation.remove({
            _id: id
        })
        .exec()
        .then((result) => {
            res.status(200).json({
                message: 'Site prize allocation successfully removed!'
            });
        })
        .catch((error) => {
            res.status(500).json({
                error: error
            });
        });
};