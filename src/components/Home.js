import logo from '../images/logo.png';
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Menu, MenuItem } from '@mui/material';
import img_home from '../images/img_home.webp';

const Home = () => {
    const [isHovered, setIsHovered] = useState(false);
    const styles = {
        whyTeethSeg: {
            backgroundColor: '#e0eaf4',
            textAlign: 'center',
            padding: '50px 20px',
        },
        whyTeethSegTitle: {
            color: '#29b6f6',
            fontSize: '36px',
            marginBottom: '20px',
        },
        whyTeethSegText: {
            fontSize: '18px',
            color: '#555',
            maxWidth: '800px',
            margin: '0 auto 40px',
        },
        features: {
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
        },
        feature: {
            width: '200px',
            textAlign: 'center',
        },
        featureImage: {
            width: '50px',
            marginBottom: '15px',
        },
        featureTitle: {
            fontSize: '20px',
            marginBottom: '10px',
        },
        featureText: {
            fontSize: '14px',
            color: '#666',
        },
        teethSeg: {
            backgroundColor: 'black',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '50px',
            paddingBottom: '50px',
            paddingLeft: '150px',
            paddingRight: '150px'
        },
        content: {
            maxWidth: '600px',
        },
        title: {
            fontSize: '40px',
            color: '#007aff',
        },
        description: {
            fontSize: '18px',
            margin: '20px 0',
            color: 'white'
        },
        button: {
            padding: '10px 20px',
            fontSize: '16px',
            fontWeight: 'bold',
            borderRadius: '5px',
            backgroundColor: '#007aff', // Couleur de fond
            color: '#fff',              // Couleur du texte
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease', // Transition pour un hover smooth
        },
        buttonHover: {
            backgroundColor: '#005bb5', // Couleur sur hover
        },
        getStarted: {
            backgroundColor: '#007aff',
            color: 'white',
        },
        seeDemo: {
            backgroundColor: '#e0eaf4',
            color: '#007aff',
        },
        imageContainer: {
            textAlign: 'right',
        },
        image: {
            width: '300px',
        },
    };

    return (
        <div>
            {/* Section 1: TeethSeg */}
            <section style={styles.teethSeg}>
                <div style={styles.content}>

                    <h1 style={styles.title}>
                        <Box
                            component="img"
                            sx={{ height: 40, marginRight: 2 }}
                            alt="Logo"
                            src={logo}
                        />
                        Teeth<span style={{ color: '#00bfa9' }}>Seg</span>
                    </h1>
                    <p style={styles.description}>
                        TeethSeg revolutionizes dental care with cutting-edge AI technology. Our advanced platform simplifies 3D tooth segmentation, providing faster and more precise results for orthodontic professionals. Step into the future of dental innovation with TeethSeg, where efficiency meets accuracy.
                    </p>
                    <button
                        style={{ ...styles.button, ...(isHovered ? styles.buttonHover : {}) }}
                        onMouseEnter={() => setIsHovered(true)}  onMouseLeave={() => setIsHovered(false)}
                    >
                        Get started &nbsp;&nbsp;>
                    </button>
                </div>
                <div style={styles.imageContainer}>
                    <img src={img_home} alt="3D Teeth Segmentation" style={styles.image} />
                </div>
            </section>

            {/* Section 2: Why TeethSeg */}
            <section style={styles.whyTeethSeg}>
                <h2 style={styles.whyTeethSegTitle}>Why TeethSeg</h2>
                <p style={styles.whyTeethSegText}>
                    3D tooth segmentation is an important task for digital orthodontics. Several Deep Learning methods have been proposed for automatic tooth segmentation from 3D dental models or intraoral scans.
                </p>
                <div style={styles.features}>
                    <div style={styles.feature}>
                        <img src="icon1.png" alt="Best AI Model" style={styles.featureImage} />
                        <h3 style={styles.featureTitle}>Best AI Model</h3>
                        <p style={styles.featureText}>
                            To do our segmentation we are using one of the most accurate teeth segmentation models, the MeshSetNet.
                        </p>
                    </div>
                    <div style={styles.feature}>
                        <img src="icon2.png" alt="Fast Response" style={styles.featureImage} />
                        <h3 style={styles.featureTitle}>Fast Response</h3>
                        <p style={styles.featureText}>
                            We optimized our API to be as fast and reliable as possible.
                        </p>
                    </div>
                    <div style={styles.feature}>
                        <img src="icon3.png" alt="Easy & Simple UI" style={styles.featureImage} />
                        <h3 style={styles.featureTitle}>Easy & Simple UI</h3>
                        <p style={styles.featureText}>
                            We developed our UI to be as easy and simple to use, with 3D integration.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
