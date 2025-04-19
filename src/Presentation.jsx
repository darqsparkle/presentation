import React, { useState } from "react";

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Common styles
  const styles = {
    container: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    slideContainer: {
      flexGrow: 1,
      position: 'relative',
      overflow: 'hidden',
      background: '#f3f4f6',
      padding: '16px',
      borderRadius: '8px'
    },
    slide: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'white',
      padding: '32px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#1e40af',
      marginBottom: '24px',
      textAlign: 'center'
    },
    subtitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '8px'
    },
    card: {
      background: '#eff6ff',
      padding: '16px',
      borderRadius: '8px',
      marginBottom: '16px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '16px'
    },
    list: {
      paddingLeft: '24px',
      marginTop: '8px',
      marginBottom: '8px'
    },
    nestedList: {
      paddingLeft: '24px',
      marginTop: '4px'
    },
    listItem: {
      marginBottom: '8px'
    },
    button: {
      padding: '8px 16px',
      background: '#2563eb',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer'
    },
    disabledButton: {
      padding: '8px 16px',
      background: '#9ca3af',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'not-allowed'
    },
    navigation: {
      marginTop: '16px',
      display: 'flex',
      justifyContent: 'space-between'
    },
    slideIndicator: {
      position: 'absolute',
      bottom: '16px',
      left: '0',
      width: '100%',
      textAlign: 'center'
    },
    slideIndicatorText: {
      background: 'white',
      padding: '4px 12px',
      borderRadius: '9999px',
      fontSize: '14px'
    },
    centerText: {
      textAlign: 'center'
    },
    bold: {
      fontWeight: 'bold'
    },
    highlight: {
      background: '#dbeafe',
      padding: '12px',
      borderRadius: '8px',
      marginBottom: '16px'
    },
    spacer: {
      marginTop: 'auto'
    }
  };
  
  const slides = [
    // Slide 1: Title
    <div key="slide1" style={styles.slide}>
      <div style={styles.centerText}>
        <h1 style={styles.title}>A RANDOMIZED CONTROLLED TRIAL TO EVALUATE THE EFFECTIVENESS OF ONLAY AND SUBLAY MESH REPAIR IN THE TREATMENT OF VENTRAL HERNIA</h1>
      </div>
      <div style={{...styles.centerText, marginBottom: '32px'}}>
        <p style={{marginBottom: '16px'}}><span style={styles.bold}>Principal Investigator:</span> Dr. U. Kavitha, Post Graduate, Department of General Surgery, AVMCH</p>
        <p style={{marginBottom: '16px'}}><span style={styles.bold}>Guide:</span> Dr. T. Ramachandrudu, MS MCh, Professor & HOD</p>
        <p style={{marginBottom: '16px'}}><span style={styles.bold}>Co-Guide:</span> Dr. A. Akmal, MS, Associate Professor</p>
        <p><span style={styles.bold}>Department:</span> General Surgery, AVMCH, Puducherry</p>
      </div>
      <div style={{...styles.spacer, ...styles.centerText, color: '#6b7280'}}>
        <p>Aarupadai Veedu Medical College and Hospital, Puducherry</p>
      </div>
    </div>,
    
    // Slide 2: Team Expertise
    <div key="slide2" style={styles.slide}>
      <h2 style={styles.title}>EXPERTISE OF THE TEAM</h2>
      
      <div style={{marginBottom: '24px'}}>
        <div style={styles.card}>
          <h3 style={styles.subtitle}>Guide: Dr. T. Ramachandrudu, MS MCh</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>Professor & HOD, Department of General Surgery</li>
            <li style={styles.listItem}>Specialization in Plastic Surgery</li>
            <li style={styles.listItem}>Registration No: TN41283</li>
          </ul>
        </div>
        
        <div style={styles.card}>
          <h3 style={styles.subtitle}>Principal Investigator: Dr. U. Kavitha</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>Post Graduate in MS General Surgery</li>
            <li style={styles.listItem}>Department of General Surgery, AVMCH</li>
          </ul>
        </div>
        
        <div style={styles.card}>
          <h3 style={styles.subtitle}>Co-Guide: Dr. A. Akmal, MS</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>Associate Professor, Department of General Surgery</li>
            <li style={styles.listItem}>Registration No: TN89508</li>
          </ul>
        </div>
      </div>
    </div>,
    
    // Slide 3: Background
    <div key="slide3" style={styles.slide}>
      <h2 style={styles.title}>BACKGROUND</h2>
      
      <ul style={styles.list}>
        <li style={styles.listItem}>Ventral hernias account for 15-18% of all surgical procedures</li>
        <li style={styles.listItem}>Incisional hernias: most common long-term complication (3-13%, up to 23%)</li>
        <li style={styles.listItem}>Primary suture repair: high recurrence</li>
        <li style={styles.listItem}>Mesh repairs: gold standard with increased understanding of abdominal wall anatomy</li>
        <li style={styles.listItem}>Two common techniques:
          <ul style={styles.nestedList}>
            <li style={styles.listItem}>Onlay: mesh placed over rectus sheath</li>
            <li style={styles.listItem}>Sublay: preperitoneal mesh repair</li>
          </ul>
        </li>
        <li style={styles.listItem}>Need for direct comparison to determine optimal technique</li>
      </ul>
      
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '16px'}}>
        <div style={styles.card}>
          <p style={{...styles.bold, marginBottom: '8px'}}>Several studies show different complication rates:</p>
          <p style={{marginBottom: '4px'}}>Seroma: 6% onlay vs 2% sublay (Saber et al.)</p>
          <p style={{marginBottom: '4px'}}>Wound infection: 13.33% onlay vs 11.11% sublay (Kumar et al.)</p>
          <p>Recurrence: 8-10% onlay vs 3-9% sublay (multiple studies)</p>
        </div>
      </div>
    </div>,
    
    // Slide 4: Aims and Objectives
    <div key="slide4" style={styles.slide}>
      <h2 style={styles.title}>AIMS AND OBJECTIVES</h2>
      
      <div style={{...styles.card, marginBottom: '24px'}}>
        <h3 style={styles.subtitle}>Primary Aim:</h3>
        <p>To evaluate the effectiveness of onlay and sublay mesh repair in the treatment of ventral hernia</p>
      </div>
      
      <div style={styles.card}>
        <h3 style={styles.subtitle}>Secondary Objectives:</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>To compare duration of surgery between techniques</li>
          <li style={styles.listItem}>To evaluate early postoperative complications:
            <ul style={styles.nestedList}>
              <li style={{marginBottom: '4px'}}>Seroma formation</li>
              <li style={{marginBottom: '4px'}}>Surgical site infections</li>
              <li style={{marginBottom: '4px'}}>Flap necrosis</li>
            </ul>
          </li>
          <li style={styles.listItem}>To compare duration of hospital stay</li>
          <li style={styles.listItem}>To assess patient-reported outcomes (pain scores, quality of life)</li>
        </ul>
      </div>
    </div>,
    
    // Slide 5: Methodology - Study Design
    <div key="slide5" style={styles.slide}>
      <h2 style={styles.title}>METHODOLOGY - STUDY DESIGN</h2>
      
      <div style={styles.grid}>
        <div style={styles.card}>
          <p><span style={styles.bold}>Study Design:</span> Randomized Controlled Trial</p>
        </div>
        
        <div style={styles.card}>
          <p><span style={styles.bold}>Study Duration:</span> 18 months</p>
        </div>
        
        <div style={styles.card}>
          <p><span style={styles.bold}>Study Site:</span> Department of General Surgery, AVMCH, Puducherry</p>
        </div>
        
        <div style={styles.card}>
          <p><span style={styles.bold}>Ethics Approval:</span> IHEC, AVMCH</p>
        </div>
      </div>
      
      <div style={{...styles.highlight, marginTop: '24px', background: '#dbeafe'}}>
        <h3 style={{...styles.subtitle, ...styles.centerText}}>Sample Size: 80 patients</h3>
        <div style={{...styles.grid, marginTop: '12px'}}>
          <div style={{background: 'white', padding: '12px', borderRadius: '8px', textAlign: 'center'}}>
            <p style={{...styles.bold, marginBottom: '4px'}}>Group 1: 40 patients</p>
            <p>Onlay mesh repair</p>
          </div>
          <div style={{background: 'white', padding: '12px', borderRadius: '8px', textAlign: 'center'}}>
            <p style={{...styles.bold, marginBottom: '4px'}}>Group 2: 40 patients</p>
            <p>Sublay mesh repair</p>
          </div>
        </div>
      </div>
    </div>,
    
    // Slide 6: Methodology - Patient Selection
    <div key="slide6" style={styles.slide}>
      <h2 style={styles.title}>METHODOLOGY - PATIENT SELECTION</h2>
      
      <div style={styles.grid}>
        <div>
          <h3 style={{...styles.subtitle, ...styles.centerText, background: '#dbeafe', padding: '8px', borderRadius: '8px', marginBottom: '12px'}}>Inclusion Criteria</h3>
          <ul style={{...styles.list, ...styles.card, height: '250px'}}>
            <li style={styles.listItem}>Age ≥ 18 years and ≤ 70 years</li>
            <li style={styles.listItem}>Both genders</li>
            <li style={styles.listItem}>All ventral hernias:
              <ul style={styles.nestedList}>
                <li style={{marginBottom: '4px'}}>Incisional</li>
                <li style={{marginBottom: '4px'}}>Supra umbilical</li>
                <li style={{marginBottom: '4px'}}>Epigastric</li>
              </ul>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 style={{...styles.subtitle, ...styles.centerText, background: '#dbeafe', padding: '8px', borderRadius: '8px', marginBottom: '12px'}}>Exclusion Criteria</h3>
          <ul style={{...styles.list, ...styles.card, height: '250px'}}>
            <li style={styles.listItem}>Recurrent hernias</li>
            <li style={styles.listItem}>Peritonitis</li>
            <li style={styles.listItem}>Obstructed/strangulated hernia</li>
            <li style={styles.listItem}>Groin hernias</li>
            <li style={styles.listItem}>Preexisting skin infections</li>
            <li style={styles.listItem}>Immunosuppressive disorders:
              <ul style={styles.nestedList}>
                <li style={{marginBottom: '4px'}}>Diabetes</li>
                <li style={{marginBottom: '4px'}}>HIV and Hepatitis</li>
                <li style={{marginBottom: '4px'}}>Severe renal/hepatic failure</li>
              </ul>
            </li>
            <li style={styles.listItem}>Advanced malignancies</li>
          </ul>
        </div>
      </div>
    </div>,
    
    // Slide 7: Methodology - Procedures
    <div key="slide7" style={styles.slide}>
      <h2 style={styles.title}>METHODOLOGY - PROCEDURES</h2>
      
      <div>
        <div style={{...styles.card, marginBottom: '12px'}}>
          <h3 style={styles.subtitle}>Patient Preparation:</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>Informed consent</li>
            <li style={styles.listItem}>Standard preoperative assessment</li>
            <li style={styles.listItem}>Baseline investigations (CBC, LFT, RFT, etc.)</li>
          </ul>
        </div>
        
        <div style={{...styles.card, marginBottom: '12px'}}>
          <h3 style={styles.subtitle}>Surgical Intervention:</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>Randomization using random number generator</li>
            <li style={styles.listItem}>Same surgeon performs both techniques</li>
            <li style={styles.listItem}>Standard mesh material and surgical approach</li>
          </ul>
        </div>
        
        <div style={styles.card}>
          <h3 style={styles.subtitle}>Data Collection & Evaluation:</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>Operative time</li>
            <li style={styles.listItem}>Intraoperative complications</li>
            <li style={styles.listItem}>Surgeon perception of ease of use</li>
            <li style={styles.listItem}>Postoperative complications (seroma, infection, flap necrosis)</li>
            <li style={styles.listItem}>Hospital stay duration</li>
            <li style={styles.listItem}>Pain assessment using Visual Analog Scale</li>
            <li style={styles.listItem}>Follow-up for 3 months</li>
          </ul>
        </div>
      </div>
    </div>,
    
    // Slide 8: Statistical Calculation
    <div key="slide8" style={styles.slide}>
      <h2 style={styles.title}>STATISTICAL CALCULATION</h2>
      
      <div style={{...styles.card, marginBottom: '16px'}}>
        <h3 style={styles.subtitle}>Sample Size Calculation:</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>Total sample size: 80 (40 in each group)</li>
          <li style={styles.listItem}>Calculated using formula for comparison of two independent proportions</li>
          <li style={styles.listItem}>Expected proportion of complications: 0.463 and 0.195</li>
          <li style={styles.listItem}>Level of significance (α): 5%</li>
          <li style={styles.listItem}>Power: 80%</li>
        </ul>
      </div>
      
      <div style={styles.card}>
        <h3 style={styles.subtitle}>Analysis Methods:</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>Descriptive statistics:
            <ul style={styles.nestedList}>
              <li style={{marginBottom: '4px'}}>Mean and SD for quantitative variables</li>
              <li style={{marginBottom: '4px'}}>Frequency and proportion for categorical variables</li>
            </ul>
          </li>
          <li style={styles.listItem}>Chi-square test for categorical variables</li>
          <li style={styles.listItem}>Independent t-test for quantitative outcomes</li>
          <li style={styles.listItem}>Data visualization using appropriate diagrams</li>
          <li style={styles.listItem}>P-value &lt; 0.05 considered statistically significant</li>
        </ul>
      </div>
    </div>,
    
    // Slide 9: Facilities Available
    <div key="slide9" style={styles.slide}>
      <h2 style={styles.title}>FACILITIES AVAILABLE IN THE DEPARTMENT</h2>
      
      <div style={styles.grid}>
        <div style={styles.card}>
          <h3 style={styles.subtitle}>Surgical Facilities:</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>General Surgery operation theaters</li>
            <li style={styles.listItem}>Equipment for open ventral hernia repair</li>
            <li style={styles.listItem}>Polypropylene mesh materials</li>
            <li style={styles.listItem}>Anesthesia facilities</li>
            <li style={styles.listItem}>Post-operative care units</li>
          </ul>
        </div>
        
        <div style={styles.card}>
          <h3 style={styles.subtitle}>Diagnostic Facilities:</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>Laboratory for routine investigations</li>
            <li style={styles.listItem}>Radiology department for imaging</li>
            <li style={styles.listItem}>USG abdomen</li>
            <li style={styles.listItem}>Pre-anesthetic evaluation</li>
          </ul>
        </div>
      </div>
      
      <div style={{...styles.card, marginTop: '16px'}}>
        <h3 style={styles.subtitle}>Research Support:</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>Clinical trial registration with CTRI</li>
          <li style={styles.listItem}>Institutional Research Committee support</li>
          <li style={styles.listItem}>Data collection and analysis tools</li>
          <li style={styles.listItem}>Documentation and record keeping facilities</li>
        </ul>
      </div>
    </div>,
    
    // Slide 10: Budget Required
    <div key="slide10" style={styles.slide}>
      <h2 style={styles.title}>BUDGET REQUIRED</h2>
      
      <div style={{...styles.highlight, marginBottom: '24px', background: '#dbeafe', textAlign: 'center'}}>
        <h3 style={{...styles.subtitle, marginBottom: '8px'}}>Total Budget: 40,000 Rupees</h3>
        <p style={styles.bold}>Source of Funding: Self</p>
      </div>
      
      <div style={styles.card}>
        <h3 style={styles.subtitle}>Budget Distribution:</h3>
        <div style={styles.grid}>
          <div>
            <ul style={styles.list}>
              <li style={styles.listItem}>Investigation costs</li>
              <li style={styles.listItem}>Surgical materials</li>
              <li style={styles.listItem}>Data collection tools</li>
            </ul>
          </div>
          <div>
            <ul style={styles.list}>
              <li style={styles.listItem}>Documentation expenses</li>
              <li style={styles.listItem}>Statistical analysis</li>
              <li style={styles.listItem}>Miscellaneous expenses</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={{...styles.card, marginTop: '24px'}}>
        <p style={{...styles.bold, marginBottom: '8px'}}>Note:</p>
        <p style={{marginBottom: '4px'}}>This is an intradepartmental study with no collaborating departments.</p>
        <p>The study involves minimal risk and no external funding is required.</p>
      </div>
    </div>,
    
    // Slide 11: References
    <div key="slide11" style={styles.slide}>
      <h2 style={styles.title}>REFERENCES</h2>
      
      <ol style={{...styles.list, listStyleType: 'decimal'}}>
        <li style={{...styles.listItem, marginBottom: '16px'}}>Fitzgibbons Jr RJ, Forse RA. Groin hernias in adults. N Eng J Med. 2015; 372(8): 756-63.</li>
        
        <li style={{...styles.listItem, marginBottom: '16px'}}>Saber A, et al. Onlay versus sublay mesh repair for ventral hernia. J Surg 2015; 4:1-4.</li>
        
        <li style={{...styles.listItem, marginBottom: '16px'}}>Kumar V, et al. A comparative analysis on various techniques of incisional hernia repair - experience from a tertiary care teaching hospital in South India. Indian J Surg 2013; 75:271-3.</li>
        
        <li style={{...styles.listItem, marginBottom: '16px'}}>Ibrahim R, et al. Is the surgical site infection rate higher in sublay or onlay mesh repair of incisional hernia? Ann Med Surg (Lond) 2021;62:200-2.</li>
        
        <li style={{...styles.listItem, marginBottom: '16px'}}>Memon MR, et al. Results of stoppa's sublay mesh repair in incisional & ventral hernias. J Pak Med Assoc. 2010; 60:798-801.</li>
      </ol>
    </div>
  ];

  return (
    <div style={styles.container}>
      <div style={styles.slideContainer}>
        {slides[currentSlide]}
        <div style={styles.slideIndicator}>
          <span style={styles.slideIndicatorText}>
            Slide {currentSlide + 1} of {slides.length}
          </span>
        </div>
      </div>
      
      <div style={styles.navigation}>
        <button 
          onClick={prevSlide}
          style={currentSlide === 0 ? styles.disabledButton : styles.button}
          disabled={currentSlide === 0}
        >
          Previous
        </button>
        <button 
          onClick={nextSlide}
          style={currentSlide === slides.length - 1 ? styles.disabledButton : styles.button}
          disabled={currentSlide === slides.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Presentation;