import express from 'exporess';
import {getTrendingTV, 
        getTVTrailers,
        getTVDetails,
        getSimilarTVs,
        getTVsByCategory} 
        from '../controllers/tv.controllers.js';

const router = express.Router();

router.get('/trending', getTrendingTV);
router.get('/:id/trailers', getTVTrailers);
router.get('/:id/details', getTVDetails);
router.get('/:id/similar', getSimilarTVs);
router.get('/category', getTVsByCategory);

export default router;