const mongoose = require('mongoose');
const SitePrizeAllocation = require('../models/site-prize-allocation');

// exports.create_site_prize_allocation = (req, res, next) => {
// let allocations = [
//     // 5c2c9761e15661126e2e54db
//     [{
//             "siteId": "5c2c9761e15661126e2e54db",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54db",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54db",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54db",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54db",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54db",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e54dc
//     [{
//             "siteId": "5c2c9761e15661126e2e54dc",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54dc",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54dc",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54dc",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54dc",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54dc",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e54dd
//     [{
//             "siteId": "5c2c9761e15661126e2e54dd",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54dd",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54dd",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54dd",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54dd",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54dd",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e54de
//     [{
//             "siteId": "5c2c9761e15661126e2e54de",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54de",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54de",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54de",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54de",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54de",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e54df
//     [{
//             "siteId": "5c2c9761e15661126e2e54df",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54df",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54df",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54df",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54df",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54df",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e54e0
//     [{
//             "siteId": "5c2c9761e15661126e2e54e0",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e0",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e0",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e0",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e0",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e0",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e54e1
//     [{
//             "siteId": "5c2c9761e15661126e2e54e1",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e1",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e1",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e1",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e1",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e1",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e54e2
//     [{
//             "siteId": "5c2c9761e15661126e2e54e2",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e2",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e2",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e2",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e2",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e2",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e54e3
//     [{
//             "siteId": "5c2c9761e15661126e2e54e3",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e3",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e3",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e3",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e3",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e3",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e54e4
//     [{
//             "siteId": "5c2c9761e15661126e2e54e4",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e4",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e4",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e4",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e4",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e4",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e54e5
//     [{
//             "siteId": "5c2c9761e15661126e2e54e5",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e5",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e5",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e5",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e5",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e5",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e54e6
//     [{
//             "siteId": "5c2c9761e15661126e2e54e6",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e6",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e6",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e6",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e6",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e6",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e54e7
//     [{
//             "siteId": "5c2c9761e15661126e2e54e7",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e7",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e7",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e7",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e7",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e7",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e54e8
//     [{
//             "siteId": "5c2c9761e15661126e2e54e8",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e8",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e8",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e8",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e8",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e8",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e54e9
//     [{
//             "siteId": "5c2c9761e15661126e2e54e9",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e9",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e9",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e9",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e9",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54e9",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e54ea
//     [{
//             "siteId": "5c2c9761e15661126e2e54ea",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54ea",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54ea",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54ea",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54ea",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54ea",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e54eb
//     [{
//             "siteId": "5c2c9761e15661126e2e54eb",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54eb",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54eb",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54eb",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54eb",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54eb",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e54ec
//     [{
//             "siteId": "5c2c9761e15661126e2e54ec",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54ec",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54ec",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54ec",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54ec",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54ec",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e54ed
//     [{
//             "siteId": "5c2c9761e15661126e2e54ed",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54ed",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54ed",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54ed",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54ed",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54ed",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e54ee
//     [{
//             "siteId": "5c2c9761e15661126e2e54ee",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54ee",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54ee",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54ee",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54ee",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54ee",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e54ef
//     [{
//             "siteId": "5c2c9761e15661126e2e54ef",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54ef",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54ef",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54ef",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54ef",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54ef",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e54f0
//     [{
//             "siteId": "5c2c9761e15661126e2e54f0",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f0",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f0",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f0",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f0",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f0",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e54f1
//     [{
//             "siteId": "5c2c9761e15661126e2e54f1",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f1",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f1",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f1",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f1",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f1",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e54f2
//     [{
//             "siteId": "5c2c9761e15661126e2e54f2",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f2",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f2",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f2",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f2",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f2",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e54f3
//     [{
//             "siteId": "5c2c9761e15661126e2e54f3",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f3",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f3",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f3",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f3",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f3",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e54f4
//     [{
//             "siteId": "5c2c9761e15661126e2e54f4",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f4",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f4",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f4",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f4",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f4",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e54f5
//     [{
//             "siteId": "5c2c9761e15661126e2e54f5",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f5",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f5",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f5",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f5",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f5",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e54f6
//     [{
//             "siteId": "5c2c9761e15661126e2e54f6",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f6",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f6",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f6",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f6",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f6",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e54f7
//     [{
//             "siteId": "5c2c9761e15661126e2e54f7",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f7",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f7",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f7",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f7",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f7",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e54f8
//     [{
//             "siteId": "5c2c9761e15661126e2e54f8",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f8",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f8",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f8",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f8",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f8",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e54f9
//     [{
//             "siteId": "5c2c9761e15661126e2e54f9",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f9",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f9",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f9",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f9",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54f9",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e54fa
//     [{
//             "siteId": "5c2c9761e15661126e2e54fa",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54fa",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54fa",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54fa",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54fa",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54fa",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e54fb
//     [{
//             "siteId": "5c2c9761e15661126e2e54fb",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54fb",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54fb",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54fb",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54fb",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54fb",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e54fc
//     [{
//             "siteId": "5c2c9761e15661126e2e54fc",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54fc",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54fc",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54fc",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54fc",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54fc",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e54fd
//     [{
//             "siteId": "5c2c9761e15661126e2e54fd",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54fd",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54fd",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54fd",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54fd",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54fd",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e54fe
//     [{
//             "siteId": "5c2c9761e15661126e2e54fe",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54fe",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54fe",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54fe",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54fe",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54fe",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e54ff
//     [{
//             "siteId": "5c2c9761e15661126e2e54ff",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54ff",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54ff",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54ff",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54ff",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e54ff",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e5500
//     [{
//             "siteId": "5c2c9761e15661126e2e5500",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5500",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5500",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5500",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5500",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5500",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e5501
//     [{
//             "siteId": "5c2c9761e15661126e2e5501",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5501",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5501",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5501",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5501",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5501",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e5502
//     [{
//             "siteId": "5c2c9761e15661126e2e5502",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5502",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5502",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5502",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5502",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5502",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e5503
//     [{
//             "siteId": "5c2c9761e15661126e2e5503",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5503",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5503",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5503",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5503",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5503",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e5504
//     [{
//             "siteId": "5c2c9761e15661126e2e5504",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5504",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5504",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5504",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5504",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5504",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e5505
//     [{
//             "siteId": "5c2c9761e15661126e2e5505",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5505",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5505",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5505",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5505",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5505",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e5506
//     [{
//             "siteId": "5c2c9761e15661126e2e5506",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5506",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5506",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5506",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5506",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5506",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e5507
//     [{
//             "siteId": "5c2c9761e15661126e2e5507",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5507",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5507",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5507",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5507",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5507",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e5508
//     [{
//             "siteId": "5c2c9761e15661126e2e5508",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5508",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5508",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5508",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5508",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5508",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e5509
//     [{
//             "siteId": "5c2c9761e15661126e2e5509",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5509",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5509",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5509",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5509",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5509",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e550a
//     [{
//             "siteId": "5c2c9761e15661126e2e550a",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e550a",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e550a",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e550a",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e550a",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e550a",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e550b
//     [{
//             "siteId": "5c2c9761e15661126e2e550b",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e550b",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e550b",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e550b",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e550b",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e550b",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e550c
//     [{
//             "siteId": "5c2c9761e15661126e2e550c",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e550c",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e550c",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e550c",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e550c",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e550c",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e550d
//     [{
//             "siteId": "5c2c9761e15661126e2e550d",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e550d",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e550d",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e550d",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e550d",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e550d",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e550e
//     [{
//             "siteId": "5c2c9761e15661126e2e550e",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e550e",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e550e",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e550e",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e550e",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e550e",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e550f
//     [{
//             "siteId": "5c2c9761e15661126e2e550f",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e550f",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e550f",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e550f",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e550f",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e550f",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e5510
//     [{
//             "siteId": "5c2c9761e15661126e2e5510",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5510",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5510",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5510",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5510",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5510",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e5511
//     [{
//             "siteId": "5c2c9761e15661126e2e5511",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5511",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5511",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5511",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5511",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5511",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e5512
//     [{
//             "siteId": "5c2c9761e15661126e2e5512",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5512",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5512",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5512",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5512",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5512",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e5513
//     [{
//             "siteId": "5c2c9761e15661126e2e5513",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5513",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5513",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5513",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5513",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5513",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e5514
//     [{
//             "siteId": "5c2c9761e15661126e2e5514",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5514",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5514",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5514",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5514",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5514",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e5515
//     [{
//             "siteId": "5c2c9761e15661126e2e5515",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5515",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5515",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5515",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5515",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5515",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e5516
//     [{
//             "siteId": "5c2c9761e15661126e2e5516",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5516",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5516",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5516",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5516",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5516",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e5517
//     [{
//             "siteId": "5c2c9761e15661126e2e5517",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5517",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5517",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5517",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5517",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5517",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e5518
//     [{
//             "siteId": "5c2c9761e15661126e2e5518",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5518",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5518",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5518",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5518",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5518",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e5519
//     [{
//             "siteId": "5c2c9761e15661126e2e5519",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5519",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5519",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5519",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5519",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5519",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e551a
//     [{
//             "siteId": "5c2c9761e15661126e2e551a",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e551a",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e551a",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e551a",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e551a",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e551a",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e551b
//     [{
//             "siteId": "5c2c9761e15661126e2e551b",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e551b",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e551b",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e551b",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e551b",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e551b",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e551c
//     [{
//             "siteId": "5c2c9761e15661126e2e551c",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e551c",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e551c",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e551c",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e551c",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e551c",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e551d
//     [{
//             "siteId": "5c2c9761e15661126e2e551d",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e551d",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e551d",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e551d",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e551d",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e551d",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e551e
//     [{
//             "siteId": "5c2c9761e15661126e2e551e",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e551e",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e551e",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e551e",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e551e",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e551e",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e551f
//     [{
//             "siteId": "5c2c9761e15661126e2e551f",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e551f",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e551f",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e551f",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e551f",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e551f",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e5520
//     [{
//             "siteId": "5c2c9761e15661126e2e5520",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5520",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5520",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5520",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5520",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5520",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
//     // 5c2c9761e15661126e2e5521
//     [{
//             "siteId": "5c2c9761e15661126e2e5521",
//             "prizeId": "5c1c8a5010f54c0b56361c8e",
//             "quantityAllocated": 8,
//             "quantityLeft": 8,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5521",
//             "prizeId": "5c1c8a3810f54c0b56361c8d",
//             "quantityAllocated": 10,
//             "quantityLeft": 10,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5521",
//             "prizeId": "5c1c8a7310f54c0b56361c8f",
//             "quantityAllocated": 30,
//             "quantityLeft": 30,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5521",
//             "prizeId": "5c1c8a8910f54c0b56361c90",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5521",
//             "prizeId": "5c1c8aa310f54c0b56361c91",
//             "quantityAllocated": 100,
//             "quantityLeft": 100,
//             "odds": 0
//         },
//         {
//             "siteId": "5c2c9761e15661126e2e5521",
//             "prizeId": "5c1c8a1b10f54c0b56361c8c",
//             "quantityAllocated": 20,
//             "quantityLeft": 20,
//             "odds": 0
//         }
//     ],
// ];

// //     let allocations = [
// //         //5c297aacbc7304070c91b717
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b717",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b717",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b717",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b717",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b717",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b717",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         //5c297aacbc7304070c91b718
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b718",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b718",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b718",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b718",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b718",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b718",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         //5c297aacbc7304070c91b719
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b719",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b719",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b719",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b719",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b719",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b719",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         //5c297aacbc7304070c91b71b
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b71b",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b71b",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b71b",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b71b",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b71b",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b71b",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b71a"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b71a",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b71a",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b71a",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b71a",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b71a",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b71a",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b71d"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b71d",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b71d",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b71d",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b71d",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b71d",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b71d",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b71e"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b71e",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b71e",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b71e",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b71e",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b71e",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b71e",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b71c"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b71c",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b71c",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b71c",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b71c",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b71c",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b71c",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b71f"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b71f",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b71f",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b71f",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b71f",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b71f",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b71f",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b720"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b720",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b720",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b720",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b720",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b720",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b720",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b722"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b722",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b722",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b722",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b722",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b722",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b722",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b721"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b721",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b721",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b721",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b721",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b721",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b721",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b723"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b723",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b723",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b723",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b723",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b723",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b723",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b724"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b724",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b724",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b724",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b724",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b724",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b724",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b725"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b725",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b725",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b725",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b725",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b725",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b725",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b726"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b726",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b726",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b726",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b726",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b726",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b726",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b727"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b727",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b727",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b727",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b727",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b727",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b727",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b728"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b728",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b728",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b728",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b728",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b728",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b728",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b729"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b729",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b729",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b729",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b729",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b729",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b729",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b72a"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b72a",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b72a",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b72a",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b72a",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b72a",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b72a",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b72b"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b72b",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b72b",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b72b",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b72b",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b72b",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b72b",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b72c"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b72c",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b72c",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b72c",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b72c",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b72c",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b72c",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b72f"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b72f",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b72f",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b72f",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b72f",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b72f",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b72f",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b72d"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b72d",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b72d",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b72d",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b72d",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b72d",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b72d",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b72e"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b72e",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b72e",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b72e",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b72e",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b72e",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b72e",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b730"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b730",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b730",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b730",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b730",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b730",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b730",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b731"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b731",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b731",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b731",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b731",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b731",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b731",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b734"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b734",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b734",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b734",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b734",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b734",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b734",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b732"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b732",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b732",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b732",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b732",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b732",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b732",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b733"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b733",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b733",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b733",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b733",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b733",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b733",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b736"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b736",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b736",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b736",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b736",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b736",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b736",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b735"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b735",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b735",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b735",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b735",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b735",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b735",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b739"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b739",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b739",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b739",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b739",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b739",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b739",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b738"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b738",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b738",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b738",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b738",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b738",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b738",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b737"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b737",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b737",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b737",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b737",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b737",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b737",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b73b"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b73b",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b73b",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b73b",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b73b",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b73b",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b73b",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b73a"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b73a",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b73a",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b73a",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b73a",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b73a",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b73a",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b73e"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b73e",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b73e",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b73e",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b73e",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b73e",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b73e",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b73d"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b73d",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b73d",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b73d",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b73d",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b73d",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b73d",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b73c"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b73c",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b73c",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b73c",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b73c",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b73c",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b73c",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b743"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b743",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b743",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b743",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b743",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b743",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b743",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b740"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b740",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b740",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b740",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b740",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b740",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b740",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b73f"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b73f",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b73f",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b73f",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b73f",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b73f",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b73f",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b741"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b741",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b741",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b741",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b741",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b741",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b741",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b742"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b742",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b742",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b742",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b742",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b742",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b742",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b748"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b748",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b748",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b748",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b748",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b748",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b748",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b745"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b745",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b745",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b745",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b745",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b745",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b745",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b744"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b744",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b744",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b744",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b744",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b744",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b744",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b746"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b746",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b746",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b746",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b746",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b746",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b746",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b747"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b747",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b747",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b747",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b747",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b747",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b747",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b74d"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b74d",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b74d",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b74d",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b74d",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b74d",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b74d",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b74a"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b74a",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b74a",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b74a",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b74a",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b74a",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b74a",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b749"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b749",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b749",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b749",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b749",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b749",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b749",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b74b"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b74b",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b74b",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b74b",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b74b",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b74b",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b74b",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b74c"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b74c",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b74c",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b74c",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b74c",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b74c",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b74c",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b752"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b752",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b752",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b752",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b752",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b752",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b752",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b74f"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b74f",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b74f",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b74f",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b74f",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b74f",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b74f",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b74e"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b74e",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b74e",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b74e",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b74e",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b74e",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b74e",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b750"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b750",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b750",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b750",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b750",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b750",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b750",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b751"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b751",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b751",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b751",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b751",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b751",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b751",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b757"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b757",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b757",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b757",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b757",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b757",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b757",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b754"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b754",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b754",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b754",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b754",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b754",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b754",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b753"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b753",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b753",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b753",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b753",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b753",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b753",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b755"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b755",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b755",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b755",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b755",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b755",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b755",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b756"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b756",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b756",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b756",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b756",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b756",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b756",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b759"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b759",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b759",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b759",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b759",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b759",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b759",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //         // "siteId": "5c297aacbc7304070c91b758"
// //         [{
// //                 "siteId": "5c297aacbc7304070c91b758",
// //                 "prizeId": "5c1c8a5010f54c0b56361c8e",
// //                 "quantityAllocated": 8,
// //                 "quantityLeft": 8,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b758",
// //                 "prizeId": "5c1c8a3810f54c0b56361c8d",
// //                 "quantityAllocated": 10,
// //                 "quantityLeft": 10,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b758",
// //                 "prizeId": "5c1c8a7310f54c0b56361c8f",
// //                 "quantityAllocated": 30,
// //                 "quantityLeft": 30,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b758",
// //                 "prizeId": "5c1c8a8910f54c0b56361c90",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b758",
// //                 "prizeId": "5c1c8aa310f54c0b56361c91",
// //                 "quantityAllocated": 100,
// //                 "quantityLeft": 100,
// //                 "odds": 0
// //             },
// //             {
// //                 "siteId": "5c297aacbc7304070c91b758",
// //                 "prizeId": "5c1c8a1b10f54c0b56361c8c",
// //                 "quantityAllocated": 20,
// //                 "quantityLeft": 20,
// //                 "odds": 0
// //             }
// //         ],
// //     ];

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

exports.get_previous_site_prize_allocation = (req, res, next) => {
    const id = req.params.sitePrizeAllocationId;

    SitePrizeAllocation.findOne({
            _id: {
                $lt: id
            }
        })
        .select('_id prizeId siteId rank quantityAllocated quantityLeft odds createdAt updatedAt')
        .populate('prizeId siteId', 'prizeType prizeName prizeImage prizeFrame siteName geofenceLatlong siteStartDate siteEndDate')
        .sort({
            _id: -1
        })
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

exports.get_next_site_prize_allocation = (req, res, next) => {
    const id = req.params.sitePrizeAllocationId;

    SitePrizeAllocation.findOne({
            _id: {
                $gt: id
            }
        })
        .select('_id prizeId siteId rank quantityAllocated quantityLeft odds createdAt updatedAt')
        .populate('prizeId siteId', 'prizeType prizeName prizeImage prizeFrame siteName geofenceLatlong siteStartDate siteEndDate')
        .sort({
            _id: 1
        })
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