import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function SegmentationResults() {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5">Résultats de la Segmentation</Typography>
                {/* Logique pour afficher les résultats */}
                <Typography variant="body1">Aucune segmentation trouvée.</Typography>
            </CardContent>
        </Card>
    );
}

export default SegmentationResults;
