import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div>
        <div className="blur_cover" />
        <header id="header" className="hse-header hse-header-transparent hse-fadeIn corousel_header" style={{ opacity: 1 }}>
          <div className="top-banner">
            <p><span>AI Summit: <strong>Agentic Distribution</strong> •</span><br />
              <span><a href="/summit/agentic-distribution/" target="_blank" rel="nofollow noopener noreferrer"> <span> Learn
                More</span> <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14" fill="none">
                  <g id="Icon">
                    <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFFFFF" />
                  </g>
                </svg></a></span>
            </p>
          </div>
          <div className="header_carousel_container">
            <div className="header_radial_gradient_element" />
            <div className="header_hide_scrolled_content">
              <div className="carousel_width_skills_container">
                <div className="carousel_width_skills">
                  <a href="https://app.hardskill.exchange/coaches/?skill=Agentic System Architecture" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Agentic System Architecture</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=GTM Tradeoff Simulation" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>GTM Tradeoff Simulation</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Org Design for Agentic Teams" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Org Design for Agentic Teams</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Signal Detection & Prioritization" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Signal Detection &amp; Prioritization</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Cross-Functional Trigger Design" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Cross-Functional Trigger Design</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=AI-Driven Market Sensing" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>AI-Driven Market Sensing</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Signal-to-Strategy Translation" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Signal-to-Strategy Translation</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Real-Time Forecasting with Live Inputs" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Real-Time Forecasting with Live Inputs</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Agent-Based Deal Execution" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Agent-Based Deal Execution</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=AI-Driven Retention Forecasting" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>AI-Driven Retention Forecasting</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Attribution in Fluid Systems" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Attribution in Fluid Systems</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Agent Stack Integration" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Agent Stack Integration</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Human-in-the-Loop Governance" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Human-in-the-Loop Governance</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Automated Segmentation & Enrichment" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Automated Segmentation &amp; Enrichment</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=AI-Driven Personalization at Scale" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>AI-Driven Personalization at Scale</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Pipeline Intelligence Automation" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Pipeline Intelligence Automation</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Trust Calibration & Error Monitoring" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Trust Calibration &amp; Error Monitoring</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Creative Prompting (Brand/Context-Aware)" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Creative Prompting (Brand/Context-Aware)</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Taste & Judgment Layering" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Taste &amp; Judgment Layering</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Agent-Based Coaching Systems" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Agent-Based Coaching Systems</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Agentic System Architecture" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Agentic System Architecture</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=GTM Tradeoff Simulation" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>GTM Tradeoff Simulation</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Org Design for Agentic Teams" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Org Design for Agentic Teams</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Signal Detection & Prioritization" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Signal Detection &amp; Prioritization</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Cross-Functional Trigger Design" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Cross-Functional Trigger Design</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=AI-Driven Market Sensing" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>AI-Driven Market Sensing</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Signal-to-Strategy Translation" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Signal-to-Strategy Translation</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Real-Time Forecasting with Live Inputs" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Real-Time Forecasting with Live Inputs</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Agent-Based Deal Execution" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Agent-Based Deal Execution</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=AI-Driven Retention Forecasting" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>AI-Driven Retention Forecasting</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Attribution in Fluid Systems" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Attribution in Fluid Systems</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Agent Stack Integration" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Agent Stack Integration</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Human-in-the-Loop Governance" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Human-in-the-Loop Governance</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Automated Segmentation & Enrichment" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Automated Segmentation &amp; Enrichment</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=AI-Driven Personalization at Scale" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>AI-Driven Personalization at Scale</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Pipeline Intelligence Automation" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Pipeline Intelligence Automation</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Trust Calibration & Error Monitoring" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Trust Calibration &amp; Error Monitoring</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Creative Prompting (Brand/Context-Aware)" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Creative Prompting (Brand/Context-Aware)</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Taste & Judgment Layering" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Taste &amp; Judgment Layering</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Agent-Based Coaching Systems" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Agent-Based Coaching Systems</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Agentic System Architecture" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Agentic System Architecture</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=GTM Tradeoff Simulation" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>GTM Tradeoff Simulation</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Org Design for Agentic Teams" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Org Design for Agentic Teams</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Signal Detection & Prioritization" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Signal Detection &amp; Prioritization</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Cross-Functional Trigger Design" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Cross-Functional Trigger Design</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=AI-Driven Market Sensing" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>AI-Driven Market Sensing</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Signal-to-Strategy Translation" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Signal-to-Strategy Translation</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Real-Time Forecasting with Live Inputs" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Real-Time Forecasting with Live Inputs</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Agent-Based Deal Execution" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Agent-Based Deal Execution</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=AI-Driven Retention Forecasting" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>AI-Driven Retention Forecasting</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Attribution in Fluid Systems" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Attribution in Fluid Systems</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Agent Stack Integration" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Agent Stack Integration</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Human-in-the-Loop Governance" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Human-in-the-Loop Governance</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Automated Segmentation & Enrichment" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Automated Segmentation &amp; Enrichment</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=AI-Driven Personalization at Scale" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>AI-Driven Personalization at Scale</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Pipeline Intelligence Automation" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Pipeline Intelligence Automation</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Trust Calibration & Error Monitoring" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Trust Calibration &amp; Error Monitoring</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Creative Prompting (Brand/Context-Aware)" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Creative Prompting (Brand/Context-Aware)</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Taste & Judgment Layering" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Taste &amp; Judgment Layering</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Agent-Based Coaching Systems" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Agent-Based Coaching Systems</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Agentic System Architecture" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Agentic System Architecture</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=GTM Tradeoff Simulation" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>GTM Tradeoff Simulation</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Org Design for Agentic Teams" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Org Design for Agentic Teams</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Signal Detection & Prioritization" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Signal Detection &amp; Prioritization</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Cross-Functional Trigger Design" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Cross-Functional Trigger Design</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=AI-Driven Market Sensing" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>AI-Driven Market Sensing</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Signal-to-Strategy Translation" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Signal-to-Strategy Translation</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Real-Time Forecasting with Live Inputs" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Real-Time Forecasting with Live Inputs</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Agent-Based Deal Execution" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Agent-Based Deal Execution</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=AI-Driven Retention Forecasting" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>AI-Driven Retention Forecasting</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Attribution in Fluid Systems" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Attribution in Fluid Systems</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Agent Stack Integration" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Agent Stack Integration</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Human-in-the-Loop Governance" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Human-in-the-Loop Governance</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Automated Segmentation & Enrichment" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Automated Segmentation &amp; Enrichment</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=AI-Driven Personalization at Scale" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>AI-Driven Personalization at Scale</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Pipeline Intelligence Automation" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Pipeline Intelligence Automation</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Trust Calibration & Error Monitoring" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Trust Calibration &amp; Error Monitoring</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Creative Prompting (Brand/Context-Aware)" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Creative Prompting (Brand/Context-Aware)</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Taste & Judgment Layering" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Taste &amp; Judgment Layering</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Agent-Based Coaching Systems" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Agent-Based Coaching Systems</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Agentic System Architecture" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Agentic System Architecture</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=GTM Tradeoff Simulation" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>GTM Tradeoff Simulation</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Org Design for Agentic Teams" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Org Design for Agentic Teams</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Signal Detection & Prioritization" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Signal Detection &amp; Prioritization</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Cross-Functional Trigger Design" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Cross-Functional Trigger Design</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=AI-Driven Market Sensing" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>AI-Driven Market Sensing</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Signal-to-Strategy Translation" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Signal-to-Strategy Translation</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Real-Time Forecasting with Live Inputs" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Real-Time Forecasting with Live Inputs</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Agent-Based Deal Execution" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Agent-Based Deal Execution</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=AI-Driven Retention Forecasting" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>AI-Driven Retention Forecasting</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Attribution in Fluid Systems" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Attribution in Fluid Systems</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Agent Stack Integration" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Agent Stack Integration</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Human-in-the-Loop Governance" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Human-in-the-Loop Governance</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Automated Segmentation & Enrichment" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Automated Segmentation &amp; Enrichment</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=AI-Driven Personalization at Scale" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>AI-Driven Personalization at Scale</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Pipeline Intelligence Automation" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Pipeline Intelligence Automation</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Trust Calibration & Error Monitoring" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Trust Calibration &amp; Error Monitoring</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Creative Prompting (Brand/Context-Aware)" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Creative Prompting (Brand/Context-Aware)</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Taste & Judgment Layering" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Taste &amp; Judgment Layering</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Agent-Based Coaching Systems" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Agent-Based Coaching Systems</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Agentic System Architecture" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Agentic System Architecture</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=GTM Tradeoff Simulation" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>GTM Tradeoff Simulation</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Org Design for Agentic Teams" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Org Design for Agentic Teams</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Signal Detection & Prioritization" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Signal Detection &amp; Prioritization</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Cross-Functional Trigger Design" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Cross-Functional Trigger Design</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=AI-Driven Market Sensing" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>AI-Driven Market Sensing</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Signal-to-Strategy Translation" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Signal-to-Strategy Translation</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Real-Time Forecasting with Live Inputs" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Real-Time Forecasting with Live Inputs</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Agent-Based Deal Execution" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Agent-Based Deal Execution</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=AI-Driven Retention Forecasting" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>AI-Driven Retention Forecasting</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Attribution in Fluid Systems" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Attribution in Fluid Systems</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Agent Stack Integration" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Agent Stack Integration</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Human-in-the-Loop Governance" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Human-in-the-Loop Governance</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Automated Segmentation & Enrichment" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Automated Segmentation &amp; Enrichment</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=AI-Driven Personalization at Scale" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>AI-Driven Personalization at Scale</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Pipeline Intelligence Automation" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Pipeline Intelligence Automation</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Trust Calibration & Error Monitoring" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Trust Calibration &amp; Error Monitoring</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Creative Prompting (Brand/Context-Aware)" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Creative Prompting (Brand/Context-Aware)</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Taste & Judgment Layering" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Taste &amp; Judgment Layering</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                  <a href="https://app.hardskill.exchange/coaches/?skill=Agent-Based Coaching Systems" target="_blank" className="carousel_width_skills_item" rel="nofollow noopener noreferrer">
                    <span>Agent-Based Coaching Systems</span>
                    <img src="https://hardskill.exchange/wp-content/uploads/2025/01/icon-5.svg" alt="icon" />
                  </a>
                </div>
              </div>
              <div className="header_text_under_carousel header_text_under_carousel_not_transparent">
                <p> <a href="https://hardskill.exchange/skills/"><strong>Explore all the skills</strong> <br />defining the
                  AI-native era <svg width={9} height={9} viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.0498 8.88749C0.791971 8.88749 0.571263 8.7957 0.38768 8.61211C0.204096 8.42853 0.112305 8.20782 0.112305 7.94999V1.04999C0.112305 0.792154 0.204096 0.571447 0.38768 0.387863C0.571263 0.20428 0.791971 0.112488 1.0498 0.112488H3.99356C4.12272 0.112488 4.23314 0.158321 4.32481 0.249988C4.41647 0.341654 4.46231 0.452071 4.46231 0.581238C4.46231 0.710405 4.41647 0.820821 4.32481 0.912488C4.23314 1.00415 4.12272 1.04999 3.99356 1.04999H1.0498V7.94999H7.94981V5.00624C7.94981 4.87707 7.99564 4.76665 8.08731 4.67499C8.17897 4.58332 8.28939 4.53749 8.41856 4.53749C8.54772 4.53749 8.65814 4.58332 8.74981 4.67499C8.84147 4.76665 8.88731 4.87707 8.88731 5.00624V7.94999C8.88731 8.20782 8.79551 8.42853 8.61193 8.61211C8.42835 8.7957 8.20764 8.88749 7.94981 8.88749H1.0498ZM7.94981 1.70624L3.69356 5.96249C3.60606 6.04999 3.49876 6.09374 3.37168 6.09374C3.2446 6.09374 3.13522 6.0479 3.04356 5.95624C2.95189 5.86457 2.90605 5.7552 2.90605 5.62811C2.90605 5.50103 2.95139 5.39216 3.04205 5.30149L7.29356 1.04999H5.86856C5.73939 1.04999 5.62897 1.00415 5.53731 0.912488C5.44564 0.820821 5.39981 0.710405 5.39981 0.581238C5.39981 0.452071 5.44564 0.341654 5.53731 0.249988C5.62897 0.158321 5.73939 0.112488 5.86856 0.112488H8.41856C8.54772 0.112488 8.65814 0.158321 8.74981 0.249988C8.84147 0.341654 8.88731 0.452071 8.88731 0.581238V3.13124C8.88731 3.2604 8.84147 3.37082 8.74981 3.46249C8.65814 3.55415 8.54772 3.59999 8.41856 3.59999C8.28939 3.59999 8.17897 3.55415 8.08731 3.46249C7.99564 3.37082 7.94981 3.2604 7.94981 3.13124V1.70624Z" fill="white" />
                  </svg></a></p>
              </div>
            </div>
          </div>
          <div className="container-fluid container-default">
            <div className="gradient-blur">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className="row align-items-center">
              <div className="col-12 d-flex align-items-center">
                <div className="header-nav">
                  <div className="left-block">
                    <div className="logo-block d-flex">
                      <a href="#modal-header-default" className="modal-btn mobile-btn-bg">
                        <div className="mobile-btn">
                          <span />
                        </div>
                      </a>
                      <div className="logo">
                        <span style={{ cursor: 'pointer' }}><svg width={105} height={20} viewBox="0 0 105 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.9984 0.437158V19.5628H12.5004V12.5137H6.498V19.5628H0V0.437158H6.498V7.21311H12.5004V0.437158H18.9984Z" fill="white" />
                          <path d="M29.3156 20C27.7187 20 26.1584 19.827 24.6349 19.4809C23.1297 19.1166 21.8907 18.6339 20.9178 18.0328L23.0104 13.3333C23.9282 13.8616 24.9561 14.2896 26.0942 14.6175C27.2322 14.9271 28.3244 15.082 29.3707 15.082C30.2701 15.082 30.9126 15 31.2981 14.8361C31.6835 14.6539 31.8763 14.3898 31.8763 14.0437C31.8763 13.643 31.6193 13.3424 31.1053 13.1421C30.6097 12.9417 29.7837 12.7231 28.6273 12.4863C27.1404 12.1767 25.9014 11.8488 24.9102 11.5027C23.919 11.1384 23.0563 10.5556 22.322 9.7541C21.5878 8.93443 21.2207 7.83242 21.2207 6.44809C21.2207 5.2459 21.5602 4.15301 22.2394 3.1694C22.9186 2.18579 23.9282 1.41166 25.2681 0.846994C26.6265 0.282331 28.2693 0 30.1967 0C31.5183 0 32.8124 0.145719 34.079 0.437158C35.3639 0.710381 36.4928 1.12022 37.4657 1.66667L35.5108 6.3388C33.6201 5.39162 31.8304 4.91803 30.1416 4.91803C28.4713 4.91803 27.6361 5.31876 27.6361 6.12022C27.6361 6.50273 27.8839 6.79417 28.3795 6.99454C28.8751 7.17668 29.6919 7.37705 30.83 7.59563C32.2985 7.86885 33.5375 8.18761 34.5471 8.55191C35.5566 8.898 36.4286 9.47177 37.1628 10.2732C37.9154 11.0747 38.2917 12.1676 38.2917 13.5519C38.2917 14.7541 37.9521 15.847 37.2729 16.8306C36.5938 17.796 35.575 18.5701 34.2167 19.153C32.8767 19.7177 31.243 20 29.3156 20Z" fill="white" />
                          <path d="M56.25 14.6995V19.5628H40.2253V0.437158H55.8921V5.30055H46.6131V7.54098H54.7632V12.1858H46.6131V14.6995H56.25Z" fill="white" />
                          <path d="M66.6415 0V5.15464H64.908V3.25479H63.3067V5.15464H61.5732V0H63.3067V1.82622H64.908V0H66.6415Z" fill="white" />
                          <path d="M70.9806 4.25626H69.0267L68.6815 5.15464H66.9185L69.1663 0H70.8704L73.1181 5.15464H71.3258L70.9806 4.25626ZM70.5031 3.00442L70.0036 1.7084L69.5041 3.00442H70.5031Z" fill="white" />
                          <path d="M75.5984 3.85862H75.1283V5.15464H73.3948V0H75.8702C76.3452 0 76.759 0.0785469 77.1116 0.235641C77.4641 0.392734 77.7359 0.618557 77.9269 0.913108C78.1179 1.20766 78.2134 1.5513 78.2134 1.94404C78.2134 2.31222 78.1301 2.63378 77.9636 2.90869C77.7971 3.1836 77.5572 3.40206 77.2438 3.56407L78.3235 5.15464H76.4725L75.5984 3.85862ZM76.4652 1.94404C76.4652 1.75258 76.4064 1.6053 76.2889 1.50221C76.1713 1.39421 75.995 1.34021 75.76 1.34021H75.1283V2.54786H75.76C75.995 2.54786 76.1713 2.49632 76.2889 2.39323C76.4064 2.28522 76.4652 2.13549 76.4652 1.94404Z" fill="white" />
                          <path d="M78.868 0H81.4021C81.9751 0 82.4795 0.105547 82.9153 0.316642C83.356 0.522828 83.6964 0.819833 83.9363 1.20766C84.1812 1.59548 84.3036 2.05204 84.3036 2.57732C84.3036 3.1026 84.1812 3.55916 83.9363 3.94698C83.6964 4.33481 83.356 4.63427 82.9153 4.84536C82.4795 5.05155 81.9751 5.15464 81.4021 5.15464H78.868V0ZM81.3287 3.79971C81.7009 3.79971 81.9971 3.69416 82.2175 3.48306C82.4428 3.26706 82.5554 2.96514 82.5554 2.57732C82.5554 2.18949 82.4428 1.89003 82.2175 1.67894C81.9971 1.46294 81.7009 1.35493 81.3287 1.35493H80.6015V3.79971H81.3287Z" fill="white" />
                          <path d="M63.4904 12.6362C63.0643 12.6362 62.6481 12.5896 62.2416 12.4963C61.8401 12.3981 61.5095 12.268 61.25 12.106L61.8083 10.8395C62.0531 10.9818 62.3273 11.0972 62.6309 11.1856C62.9346 11.269 63.2259 11.3108 63.5051 11.3108C63.745 11.3108 63.9164 11.2887 64.0192 11.2445C64.1221 11.1954 64.1735 11.1242 64.1735 11.0309C64.1735 10.9229 64.1049 10.8419 63.9678 10.7879C63.8356 10.7339 63.6152 10.675 63.3067 10.6112C62.9101 10.5277 62.5795 10.4394 62.3151 10.3461C62.0507 10.2479 61.8205 10.0908 61.6246 9.87482C61.4287 9.6539 61.3308 9.3569 61.3308 8.9838C61.3308 8.65979 61.4214 8.36524 61.6026 8.10015C61.7838 7.83505 62.0531 7.62641 62.4106 7.47423C62.7729 7.32204 63.2112 7.24595 63.7254 7.24595C64.078 7.24595 64.4232 7.28522 64.7611 7.36377C65.1039 7.43741 65.4051 7.54786 65.6646 7.69514L65.1431 8.95434C64.6387 8.69907 64.1612 8.57143 63.7107 8.57143C63.2651 8.57143 63.0423 8.67943 63.0423 8.89544C63.0423 8.99853 63.1084 9.07707 63.2406 9.13107C63.3728 9.18017 63.5907 9.23417 63.8944 9.29308C64.2861 9.36672 64.6167 9.45263 64.886 9.55081C65.1553 9.64409 65.3879 9.79872 65.5838 10.0147C65.7846 10.2307 65.885 10.5253 65.885 10.8984C65.885 11.2224 65.7944 11.5169 65.6132 11.782C65.432 12.0422 65.1602 12.2509 64.7978 12.408C64.4404 12.5601 64.0045 12.6362 63.4904 12.6362Z" fill="white" />
                          <path d="M68.4943 10.81L68.105 11.2445V12.5184H66.4008V7.36377H68.105V9.23417L69.7944 7.36377H71.6822L69.6255 9.63181L71.785 12.5184H69.7797L68.4943 10.81Z" fill="white" />
                          <path d="M72.0175 7.36377H73.751V12.5184H72.0175V7.36377Z" fill="white" />
                          <path d="M74.5855 7.36377H76.3191V11.1708H78.6402V12.5184H74.5855V7.36377Z" fill="white">
                          </path>
                          <path d="M79.119 7.36377H80.8526V11.1708H83.1737V12.5184H79.119V7.36377Z" fill="white">
                          </path>
                          <path d="M65.8482 18.5714V19.8822H61.5732V14.7275H65.7528V16.0383H63.2773V16.6421H65.4516V17.894H63.2773V18.5714H65.8482Z" fill="white" />
                          <path d="M69.7337 19.8822L68.845 18.5052L67.9782 19.8822H66.0023L67.8607 17.2828L66.0684 14.7275H68.0149L68.889 16.0236L69.7411 14.7275H71.6068L69.8219 17.2165L71.717 19.8822H69.7337Z" fill="white" />
                          <path d="M74.5474 20C74.0039 20 73.5142 19.8871 73.0783 19.6613C72.6425 19.4305 72.2997 19.1114 72.05 18.704C71.8051 18.2916 71.6827 17.8252 71.6827 17.3049C71.6827 16.7845 71.8051 16.3206 72.05 15.9131C72.2997 15.5007 72.6425 15.1816 73.0783 14.9558C73.5142 14.7251 74.0039 14.6097 74.5474 14.6097C75.0469 14.6097 75.4925 14.6981 75.8843 14.8748C76.2761 15.0515 76.5993 15.3068 76.8539 15.6406L75.7594 16.62C75.4411 16.2175 75.0665 16.0162 74.6356 16.0162C74.2732 16.0162 73.9818 16.134 73.7615 16.3697C73.5411 16.6004 73.4309 16.9121 73.4309 17.3049C73.4309 17.6976 73.5411 18.0118 73.7615 18.2474C73.9818 18.4782 74.2732 18.5935 74.6356 18.5935C75.0665 18.5935 75.4411 18.3922 75.7594 17.9897L76.8539 18.9691C76.5993 19.3029 76.2761 19.5582 75.8843 19.7349C75.4925 19.9116 75.0469 20 74.5474 20Z" fill="white" />
                          <path d="M82.4228 14.7275V19.8822H80.6892V17.9823H79.0879V19.8822H77.3544V14.7275H79.0879V16.5538H80.6892V14.7275H82.4228Z" fill="white" />
                          <path d="M86.7618 18.9838H84.8079L84.4627 19.8822H82.6998L84.9475 14.7275H86.6516L88.8993 19.8822H87.107L86.7618 18.9838ZM86.2843 17.732L85.7849 16.4359L85.2854 17.732H86.2843Z" fill="white" />
                          <path d="M94.2443 14.7275V19.8822H92.8193L90.8654 17.5405V19.8822H89.176V14.7275H90.601L92.5549 17.0692V14.7275H94.2443Z" fill="white" />
                          <path d="M98.4805 17.1649H99.9863V19.3446C99.6827 19.5557 99.3301 19.7177 98.9286 19.8306C98.527 19.9435 98.1328 20 97.746 20C97.1975 20 96.7054 19.8871 96.2695 19.6613C95.8337 19.4305 95.4909 19.1114 95.2412 18.704C94.9963 18.2916 94.8739 17.8252 94.8739 17.3049C94.8739 16.7845 94.9963 16.3206 95.2412 15.9131C95.4909 15.5007 95.8362 15.1816 96.2769 14.9558C96.7225 14.7251 97.2244 14.6097 97.7827 14.6097C98.2871 14.6097 98.7376 14.6956 99.1343 14.8675C99.5358 15.0344 99.8688 15.2798 100.133 15.6038L99.0241 16.5832C98.7009 16.2052 98.3165 16.0162 97.8708 16.0162C97.4889 16.0162 97.1853 16.1316 96.96 16.3623C96.7348 16.593 96.6221 16.9072 96.6221 17.3049C96.6221 17.6927 96.7323 18.0044 96.9527 18.2401C97.1779 18.4757 97.4766 18.5935 97.8488 18.5935C98.0692 18.5935 98.2797 18.5518 98.4805 18.4683V17.1649Z" fill="white" />
                          <path d="M105 18.5714V19.8822H100.725V14.7275H104.905V16.0383H102.429V16.6421H104.603V17.894H102.429V18.5714H105Z" fill="white" />
                        </svg>
                        </span>
                      </div>
                    </div>
                    <div className="menu-nav" style={{ right: 'calc(6% + 31.4px)' }}>
                      <div className="menu not_event">
                        <div className="menu-title">
                          <p><a target="_blank" href="https://app.hardskill.exchange/" rel="nofollow noopener noreferrer"><span data-text="Marketplace">Marketplace</span></a>
                          </p>
                        </div>
                      </div>
                      <div className="menu">
                        <div className="menu-title">
                          <p><a href="#" data-menu-id={353} ><span data-text="AI Summits">AI Summits</span></a></p>
                          <svg xmlns="http://www.w3.org/2000/svg" width={10} height={6} viewBox="0 0 10 6" fill="none">
                            <path d="M5.00012 5.40625C4.89595 5.40625 4.79699 5.38715 4.70324 5.34896C4.60949 5.31076 4.52442 5.25347 4.44803 5.17708L0.677199 1.40625C0.524421 1.25347 0.449769 1.06944 0.453241 0.854167C0.456713 0.638889 0.534838 0.458333 0.687616 0.3125C0.840393 0.166667 1.02269 0.09375 1.23449 0.09375C1.4463 0.09375 1.62512 0.166667 1.77095 0.3125L5.00012 3.54167L8.22928 0.3125C8.37512 0.166667 8.55393 0.09375 8.76574 0.09375C8.97755 0.09375 9.15984 0.166667 9.31261 0.3125C9.46539 0.458333 9.54352 0.638889 9.54699 0.854167C9.55046 1.06944 9.47581 1.25347 9.32303 1.40625L5.5522 5.17708C5.47581 5.25347 5.39074 5.31076 5.29699 5.34896C5.20324 5.38715 5.10428 5.40625 5.00012 5.40625Z" fill="white" />
                          </svg>
                        </div>
                        <div className="menu-list">
                          <div className="menu-list_container">
                            <div className="menu-footer-menu-ai-summits-container">
                              <ul className="custom_menu_shortcode">
                                <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="/summit/agentic-distribution/" className="main_menu_item_wrapper main_menu_item_wrapper_primary">
                                  <div className="menu_item_date">Sep 16–18, 2025</div>
                                  <div><span className="main_menu_item">Agentic Distribution Summit</span><svg className="menu_item_arrow" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 14 14" fill="none">
                                    <g>
                                      <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFF" />
                                    </g>
                                  </svg></div>
                                  <div className="menu-item-description">The Machines Are the Channel Now</div>
                                </a></li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="/summit/agentic-ai-summit/" className="main_menu_item_wrapper">
                                  <div className="menu_item_date">May 2025</div>
                                  <div><span className="main_menu_item">Agentic AI Summit</span><svg className="menu_item_arrow" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 14 14" fill="none">
                                    <g>
                                      <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFF" />
                                    </g>
                                  </svg></div>
                                  <div className="menu-item-description">The Dawn of AI-native GTM</div>
                                </a></li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="/summit/ai-led-growth/" className="main_menu_item_wrapper">
                                  <div className="menu_item_date">Feb 2025</div>
                                  <div><span className="main_menu_item">AI-led Growth (AI-LG) Summit</span><svg className="menu_item_arrow" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 14 14" fill="none">
                                    <g>
                                      <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFF" />
                                    </g>
                                  </svg></div>
                                  <div className="menu-item-description">Orchestrating the Future of GTM Motions
                                  </div>
                                </a></li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="/summit/forecast-25/" className="main_menu_item_wrapper">
                                  <div className="menu_item_date">Nov 2024</div>
                                  <div><span className="main_menu_item">Forecast’25 Summit</span><svg className="menu_item_arrow" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 14 14" fill="none">
                                    <g>
                                      <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFF" />
                                    </g>
                                  </svg></div>
                                  <div className="menu-item-description">B2B Minds and AI Merge: Reprogramming the
                                    Future of Revenue in 2025</div>
                                </a></li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="/summit/ai-summit/" className="main_menu_item_wrapper">
                                  <div className="menu_item_date">Sep 2024</div>
                                  <div><span className="main_menu_item">B2B’s First AI Summit</span><svg className="menu_item_arrow" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 14 14" fill="none">
                                    <g>
                                      <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFF" />
                                    </g>
                                  </svg></div>
                                  <div className="menu-item-description">Learn How AI Helps Revenue Teams Improve
                                    Every Step of the Funnel</div>
                                </a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="menu">
                        <div className="menu-title">
                          <p><a href="#" data-menu-id={352} ><span data-text="AI Practice Sessions">AI Practice Sessions</span></a></p>
                          <svg xmlns="http://www.w3.org/2000/svg" width={10} height={6} viewBox="0 0 10 6" fill="none">
                            <path d="M5.00012 5.40625C4.89595 5.40625 4.79699 5.38715 4.70324 5.34896C4.60949 5.31076 4.52442 5.25347 4.44803 5.17708L0.677199 1.40625C0.524421 1.25347 0.449769 1.06944 0.453241 0.854167C0.456713 0.638889 0.534838 0.458333 0.687616 0.3125C0.840393 0.166667 1.02269 0.09375 1.23449 0.09375C1.4463 0.09375 1.62512 0.166667 1.77095 0.3125L5.00012 3.54167L8.22928 0.3125C8.37512 0.166667 8.55393 0.09375 8.76574 0.09375C8.97755 0.09375 9.15984 0.166667 9.31261 0.3125C9.46539 0.458333 9.54352 0.638889 9.54699 0.854167C9.55046 1.06944 9.47581 1.25347 9.32303 1.40625L5.5522 5.17708C5.47581 5.25347 5.39074 5.31076 5.29699 5.34896C5.20324 5.38715 5.10428 5.40625 5.00012 5.40625Z" fill="white" />
                          </svg>
                        </div>
                        <div className="menu-list">
                          <div className="menu-list_container">
                            <div className="menu-footer-menu-ai-practice-sessions-container">
                              <ul className="custom_menu_shortcode">
                                <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="/ai-practice-sessions/agentic-scaling/" className="main_menu_item_wrapper">
                                  <div className="menu_item_date">Jun 2025</div>
                                  <div><span className="main_menu_item">Agentic Scaling</span><svg className="menu_item_arrow" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 14 14" fill="none">
                                    <g>
                                      <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFF" />
                                    </g>
                                  </svg></div>
                                  <div className="menu-item-description">Real-World AI Applications for De-risking
                                    and Resolving the Innovator’s Dilemma in GTM</div>
                                </a></li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="/ai-practice-sessions/diamond-grade-marketing-2025/" className="main_menu_item_wrapper">
                                  <div className="menu_item_date">Mar 2025</div>
                                  <div><span className="main_menu_item">Diamond-Grade Marketing</span><svg className="menu_item_arrow" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 14 14" fill="none">
                                    <g>
                                      <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFF" />
                                    </g>
                                  </svg></div>
                                  <div className="menu-item-description">AI Search Experience Optimization,
                                    Power-Law User Acquisition, Agentic Demo Automation, Causal GTM, AI MarOps,
                                    and more.</div>
                                </a></li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="/ai-practice-sessions/prospecting-methods-2025/" className="main_menu_item_wrapper">
                                  <div className="menu_item_date">Dec 2024</div>
                                  <div><span className="main_menu_item">Prospecting Methods</span><svg className="menu_item_arrow" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 14 14" fill="none">
                                    <g>
                                      <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFF" />
                                    </g>
                                  </svg></div>
                                  <div className="menu-item-description">Hyper-Personalized Outreach, Predictive
                                    Targeting, Ecosystem-Led Growth, Signal-Based Prospecting, AI-Powered SDRs,
                                    and more.</div>
                                </a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="menu not_event">
                        <div className="menu-title">
                          <p><a target="_blank" href="https://join.slack.com/t/hardskillexchange/shared_invite/zt-33obl1dwy-35dwpTiVUh7VjUohtHXpVA" rel="nofollow noopener noreferrer">
                            <span data-text="Slack">Slack</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 17 17" fill="none">
                              <path d="M6.49935 4.83335C5.96518 4.83335 2.86518 4.83335 2.33268 4.83335C1.41185 4.83335 0.666016 5.57919 0.666016 6.50002C0.666016 7.42085 1.41185 8.16669 2.33268 8.16669C2.86518 8.16669 5.96518 8.16669 6.49935 8.16669C7.42018 8.16669 8.16602 7.42085 8.16602 6.50002C8.16602 5.57919 7.42018 4.83335 6.49935 4.83335ZM8.16602 2.33335C8.16602 2.83169 8.16602 4.00002 8.16602 4.00002C8.16602 4.00002 6.92185 4.00002 6.49935 4.00002C5.57852 4.00002 4.83268 3.25419 4.83268 2.33335C4.83268 1.41252 5.57852 0.666687 6.49935 0.666687C7.42018 0.666687 8.16602 1.41252 8.16602 2.33335ZM4.83268 10.6667C4.83268 11.2009 4.83268 14.3009 4.83268 14.8334C4.83268 15.7542 5.57852 16.5 6.49935 16.5C7.42018 16.5 8.16602 15.7542 8.16602 14.8334C8.16602 14.3009 8.16602 11.2009 8.16602 10.6667C8.16602 9.74585 7.42018 9.00002 6.49935 9.00002C5.57852 9.00002 4.83268 9.74585 4.83268 10.6667ZM2.33268 9.00002C2.83102 9.00002 3.99935 9.00002 3.99935 9.00002C3.99935 9.00002 3.99935 10.2442 3.99935 10.6667C3.99935 11.5875 3.25352 12.3334 2.33268 12.3334C1.41185 12.3334 0.666016 11.5875 0.666016 10.6667C0.666016 9.74585 1.41185 9.00002 2.33268 9.00002ZM10.666 12.3334C11.2002 12.3334 14.3002 12.3334 14.8327 12.3334C15.7535 12.3334 16.4993 11.5875 16.4993 10.6667C16.4993 9.74585 15.7535 9.00002 14.8327 9.00002C14.3002 9.00002 11.2002 9.00002 10.666 9.00002C9.74518 9.00002 8.99935 9.74585 8.99935 10.6667C8.99935 11.5867 9.74518 12.3334 10.666 12.3334ZM8.99935 14.8334C8.99935 14.335 8.99935 13.1667 8.99935 13.1667C8.99935 13.1667 10.2435 13.1667 10.666 13.1667C11.5868 13.1667 12.3327 13.9125 12.3327 14.8334C12.3327 15.7542 11.5868 16.5 10.666 16.5C9.74518 16.5 8.99935 15.7534 8.99935 14.8334ZM12.3327 6.50002C12.3327 5.96585 12.3327 2.86585 12.3327 2.33335C12.3327 1.41252 11.5868 0.666687 10.666 0.666687C9.74518 0.666687 8.99935 1.41252 8.99935 2.33335C8.99935 2.86585 8.99935 5.96585 8.99935 6.50002C8.99935 7.42085 9.74518 8.16669 10.666 8.16669C11.586 8.16669 12.3327 7.42002 12.3327 6.50002ZM14.8327 8.16669C14.3343 8.16669 13.166 8.16669 13.166 8.16669C13.166 8.16669 13.166 6.92252 13.166 6.50002C13.166 5.57919 13.9118 4.83335 14.8327 4.83335C15.7535 4.83335 16.4993 5.57919 16.4993 6.50002C16.4993 7.42085 15.7527 8.16669 14.8327 8.16669Z" fill="white" />
                            </svg>
                          </a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="right-block">
                    <div className="button-block">
                      <button className="get_help_button">
                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM9 14H11V16H9V14ZM10.61 4.04C8.55 3.74 6.73 5.01 6.18 6.83C6 7.41 6.44 8 7.05 8H7.25C7.66 8 7.99 7.71 8.13 7.33C8.45 6.44 9.4 5.83 10.43 6.05C11.38 6.25 12.08 7.18 12 8.15C11.9 9.49 10.38 9.78 9.55 11.03C9.55 11.04 9.54 11.04 9.54 11.05C9.53 11.07 9.52 11.08 9.51 11.1C9.42 11.25 9.33 11.42 9.26 11.6C9.25 11.63 9.23 11.65 9.22 11.68C9.21 11.7 9.21 11.72 9.2 11.75C9.08 12.09 9 12.5 9 13H11C11 12.58 11.11 12.23 11.28 11.93C11.3 11.9 11.31 11.87 11.33 11.84C11.41 11.7 11.51 11.57 11.61 11.45C11.62 11.44 11.63 11.42 11.64 11.41C11.74 11.29 11.85 11.18 11.97 11.07C12.93 10.16 14.23 9.42 13.96 7.51C13.72 5.77 12.35 4.3 10.61 4.04Z" fill="white" />
                        </svg>
                        <span data-text="Get help">Get help</span>
                      </button>
                      <p><a className="orange_gradient_button" href="https://app.hardskill.exchange/" target="_blank" rel="nofollow noopener noreferrer"><span data-text="Start">Start</span><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                        <path d="M12.15 8.93749H1.1875C0.929167 8.93749 0.708333 8.84582 0.525 8.66249C0.341667 8.47915 0.25 8.25832 0.25 7.99999C0.25 7.74165 0.341667 7.52082 0.525 7.33749C0.708333 7.15415 0.929167 7.06249 1.1875 7.06249H12.15L7.325 2.23749C7.13333 2.04582 7.03958 1.82499 7.04375 1.57499C7.04792 1.32499 7.14583 1.10415 7.3375 0.912487C7.52917 0.729153 7.75 0.635403 8 0.631236C8.25 0.62707 8.47083 0.72082 8.6625 0.912487L15.0875 7.33749C15.1792 7.42915 15.2479 7.53124 15.2937 7.64374C15.3396 7.75624 15.3625 7.87499 15.3625 7.99999C15.3625 8.12499 15.3396 8.24374 15.2937 8.35624C15.2479 8.46874 15.1792 8.57082 15.0875 8.66249L8.6625 15.0875C8.47917 15.2708 8.26042 15.3625 8.00625 15.3625C7.75208 15.3625 7.52917 15.2708 7.3375 15.0875C7.14583 14.8958 7.05 14.6729 7.05 14.4187C7.05 14.1646 7.14583 13.9417 7.3375 13.75L12.15 8.93749Z" fill="white" />
                      </svg></a></p>
                    </div>
                    <div className="popup" id="modal-header-default">
                      <div className="popup-overlay" />
                      <div className="popup-body mine-first-overflow">
                        <div className="popup-content">
                          <a href="#" className="popup-close">
                            <span className="material-icons">close</span>
                          </a>
                          <div className="popup-body-menu">
                            {/* Show menu */}
                            <div className="menu-nav">
                              <div className="menu not_event">
                                <div className="menu-title">
                                  <p><a target="_blank" href="https://app.hardskill.exchange/" rel="nofollow noopener noreferrer"><span data-text="Marketplace">Marketplace</span></a></p>
                                </div>
                              </div>
                              <div className="menu">
                                <div className="menu-title">
                                  <p><a href="#" data-menu-id={353} ><span data-text="AI Summits">AI Summits</span></a></p>
                                  <svg xmlns="http://www.w3.org/2000/svg" width={10} height={6} viewBox="0 0 10 6" fill="none">
                                    <path d="M5.00012 5.40625C4.89595 5.40625 4.79699 5.38715 4.70324 5.34896C4.60949 5.31076 4.52442 5.25347 4.44803 5.17708L0.677199 1.40625C0.524421 1.25347 0.449769 1.06944 0.453241 0.854167C0.456713 0.638889 0.534838 0.458333 0.687616 0.3125C0.840393 0.166667 1.02269 0.09375 1.23449 0.09375C1.4463 0.09375 1.62512 0.166667 1.77095 0.3125L5.00012 3.54167L8.22928 0.3125C8.37512 0.166667 8.55393 0.09375 8.76574 0.09375C8.97755 0.09375 9.15984 0.166667 9.31261 0.3125C9.46539 0.458333 9.54352 0.638889 9.54699 0.854167C9.55046 1.06944 9.47581 1.25347 9.32303 1.40625L5.5522 5.17708C5.47581 5.25347 5.39074 5.31076 5.29699 5.34896C5.20324 5.38715 5.10428 5.40625 5.00012 5.40625Z" fill="white" />
                                  </svg>
                                </div>
                                <div className="menu-list">
                                  <div className="menu-footer-menu-ai-summits-container">
                                    <ul className="custom_menu_shortcode">
                                      <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="/summit/agentic-distribution/" className="main_menu_item_wrapper main_menu_item_wrapper_primary">
                                        <div className="menu_item_date">Sep 16–18, 2025</div>
                                        <div><span className="main_menu_item">Agentic Distribution
                                          Summit</span><svg className="menu_item_arrow" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 14 14" fill="none">
                                            <g>
                                              <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFF" />
                                            </g>
                                          </svg></div>
                                        <div className="menu-item-description">The Machines Are the Channel Now
                                        </div>
                                      </a></li>
                                      <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="/summit/agentic-ai-summit/" className="main_menu_item_wrapper">
                                        <div className="menu_item_date">May 2025</div>
                                        <div><span className="main_menu_item">Agentic AI Summit</span><svg className="menu_item_arrow" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 14 14" fill="none">
                                          <g>
                                            <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFF" />
                                          </g>
                                        </svg></div>
                                        <div className="menu-item-description">The Dawn of AI-native GTM</div>
                                      </a></li>
                                      <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="/summit/ai-led-growth/" className="main_menu_item_wrapper">
                                        <div className="menu_item_date">Feb 2025</div>
                                        <div><span className="main_menu_item">AI-led Growth (AI-LG)
                                          Summit</span><svg className="menu_item_arrow" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 14 14" fill="none">
                                            <g>
                                              <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFF" />
                                            </g>
                                          </svg></div>
                                        <div className="menu-item-description">Orchestrating the Future of GTM
                                          Motions</div>
                                      </a></li>
                                      <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="/summit/forecast-25/" className="main_menu_item_wrapper">
                                        <div className="menu_item_date">Nov 2024</div>
                                        <div><span className="main_menu_item">Forecast’25 Summit</span><svg className="menu_item_arrow" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 14 14" fill="none">
                                          <g>
                                            <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFF" />
                                          </g>
                                        </svg></div>
                                        <div className="menu-item-description">B2B Minds and AI Merge:
                                          Reprogramming the Future of Revenue in 2025</div>
                                      </a></li>
                                      <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="/summit/ai-summit/" className="main_menu_item_wrapper">
                                        <div className="menu_item_date">Sep 2024</div>
                                        <div><span className="main_menu_item">B2B’s First AI Summit</span><svg className="menu_item_arrow" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 14 14" fill="none">
                                          <g>
                                            <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFF" />
                                          </g>
                                        </svg></div>
                                        <div className="menu-item-description">Learn How AI Helps Revenue Teams
                                          Improve Every Step of the Funnel</div>
                                      </a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="menu">
                                <div className="menu-title">
                                  <p><a href="#" data-menu-id={352} ><span data-text="AI Practice Sessions">AI Practice Sessions</span></a></p>
                                  <svg xmlns="http://www.w3.org/2000/svg" width={10} height={6} viewBox="0 0 10 6" fill="none">
                                    <path d="M5.00012 5.40625C4.89595 5.40625 4.79699 5.38715 4.70324 5.34896C4.60949 5.31076 4.52442 5.25347 4.44803 5.17708L0.677199 1.40625C0.524421 1.25347 0.449769 1.06944 0.453241 0.854167C0.456713 0.638889 0.534838 0.458333 0.687616 0.3125C0.840393 0.166667 1.02269 0.09375 1.23449 0.09375C1.4463 0.09375 1.62512 0.166667 1.77095 0.3125L5.00012 3.54167L8.22928 0.3125C8.37512 0.166667 8.55393 0.09375 8.76574 0.09375C8.97755 0.09375 9.15984 0.166667 9.31261 0.3125C9.46539 0.458333 9.54352 0.638889 9.54699 0.854167C9.55046 1.06944 9.47581 1.25347 9.32303 1.40625L5.5522 5.17708C5.47581 5.25347 5.39074 5.31076 5.29699 5.34896C5.20324 5.38715 5.10428 5.40625 5.00012 5.40625Z" fill="white" />
                                  </svg>
                                </div>
                                <div className="menu-list">
                                  <div className="menu-footer-menu-ai-practice-sessions-container">
                                    <ul className="custom_menu_shortcode">
                                      <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="/ai-practice-sessions/agentic-scaling/" className="main_menu_item_wrapper">
                                        <div className="menu_item_date">Jun 2025</div>
                                        <div><span className="main_menu_item">Agentic Scaling</span><svg className="menu_item_arrow" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 14 14" fill="none">
                                          <g>
                                            <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFF" />
                                          </g>
                                        </svg></div>
                                        <div className="menu-item-description">Real-World AI Applications for
                                          De-risking and Resolving the Innovator’s Dilemma in GTM</div>
                                      </a></li>
                                      <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="/ai-practice-sessions/diamond-grade-marketing-2025/" className="main_menu_item_wrapper">
                                        <div className="menu_item_date">Mar 2025</div>
                                        <div><span className="main_menu_item">Diamond-Grade Marketing</span><svg className="menu_item_arrow" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 14 14" fill="none">
                                          <g>
                                            <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFF" />
                                          </g>
                                        </svg></div>
                                        <div className="menu-item-description">AI Search Experience Optimization,
                                          Power-Law User Acquisition, Agentic Demo Automation, Causal GTM,
                                          AI MarOps, and more.</div>
                                      </a></li>
                                      <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="/ai-practice-sessions/prospecting-methods-2025/" className="main_menu_item_wrapper">
                                        <div className="menu_item_date">Dec 2024</div>
                                        <div><span className="main_menu_item">Prospecting Methods</span><svg className="menu_item_arrow" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 14 14" fill="none">
                                          <g>
                                            <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFF" />
                                          </g>
                                        </svg></div>
                                        <div className="menu-item-description">Hyper-Personalized Outreach,
                                          Predictive Targeting, Ecosystem-Led Growth, Signal-Based
                                          Prospecting, AI-Powered SDRs, and more.</div>
                                      </a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="menu not_event">
                                <div className="menu-title">
                                  <p><a target="_blank" href="https://join.slack.com/t/hardskillexchange/shared_invite/zt-33obl1dwy-35dwpTiVUh7VjUohtHXpVA" rel="nofollow noopener noreferrer">
                                    <span data-text="Slack">Slack</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 17 17" fill="none">
                                      <path d="M6.49935 4.83335C5.96518 4.83335 2.86518 4.83335 2.33268 4.83335C1.41185 4.83335 0.666016 5.57919 0.666016 6.50002C0.666016 7.42085 1.41185 8.16669 2.33268 8.16669C2.86518 8.16669 5.96518 8.16669 6.49935 8.16669C7.42018 8.16669 8.16602 7.42085 8.16602 6.50002C8.16602 5.57919 7.42018 4.83335 6.49935 4.83335ZM8.16602 2.33335C8.16602 2.83169 8.16602 4.00002 8.16602 4.00002C8.16602 4.00002 6.92185 4.00002 6.49935 4.00002C5.57852 4.00002 4.83268 3.25419 4.83268 2.33335C4.83268 1.41252 5.57852 0.666687 6.49935 0.666687C7.42018 0.666687 8.16602 1.41252 8.16602 2.33335ZM4.83268 10.6667C4.83268 11.2009 4.83268 14.3009 4.83268 14.8334C4.83268 15.7542 5.57852 16.5 6.49935 16.5C7.42018 16.5 8.16602 15.7542 8.16602 14.8334C8.16602 14.3009 8.16602 11.2009 8.16602 10.6667C8.16602 9.74585 7.42018 9.00002 6.49935 9.00002C5.57852 9.00002 4.83268 9.74585 4.83268 10.6667ZM2.33268 9.00002C2.83102 9.00002 3.99935 9.00002 3.99935 9.00002C3.99935 9.00002 3.99935 10.2442 3.99935 10.6667C3.99935 11.5875 3.25352 12.3334 2.33268 12.3334C1.41185 12.3334 0.666016 11.5875 0.666016 10.6667C0.666016 9.74585 1.41185 9.00002 2.33268 9.00002ZM10.666 12.3334C11.2002 12.3334 14.3002 12.3334 14.8327 12.3334C15.7535 12.3334 16.4993 11.5875 16.4993 10.6667C16.4993 9.74585 15.7535 9.00002 14.8327 9.00002C14.3002 9.00002 11.2002 9.00002 10.666 9.00002C9.74518 9.00002 8.99935 9.74585 8.99935 10.6667C8.99935 11.5867 9.74518 12.3334 10.666 12.3334ZM8.99935 14.8334C8.99935 14.335 8.99935 13.1667 8.99935 13.1667C8.99935 13.1667 10.2435 13.1667 10.666 13.1667C11.5868 13.1667 12.3327 13.9125 12.3327 14.8334C12.3327 15.7542 11.5868 16.5 10.666 16.5C9.74518 16.5 8.99935 15.7534 8.99935 14.8334ZM12.3327 6.50002C12.3327 5.96585 12.3327 2.86585 12.3327 2.33335C12.3327 1.41252 11.5868 0.666687 10.666 0.666687C9.74518 0.666687 8.99935 1.41252 8.99935 2.33335C8.99935 2.86585 8.99935 5.96585 8.99935 6.50002C8.99935 7.42085 9.74518 8.16669 10.666 8.16669C11.586 8.16669 12.3327 7.42002 12.3327 6.50002ZM14.8327 8.16669C14.3343 8.16669 13.166 8.16669 13.166 8.16669C13.166 8.16669 13.166 6.92252 13.166 6.50002C13.166 5.57919 13.9118 4.83335 14.8327 4.83335C15.7535 4.83335 16.4993 5.57919 16.4993 6.50002C16.4993 7.42085 15.7527 8.16669 14.8327 8.16669Z" fill="white" />
                                    </svg>
                                  </a></p>
                                </div>
                              </div>
                            </div>
                            <div className="show-mobile button">
                              <p><a className="orange_gradient_button" href="https://app.hardskill.exchange/" target="_blank" rel="nofollow noopener noreferrer"><span data-text="Start">Start</span><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                <path d="M12.15 8.93749H1.1875C0.929167 8.93749 0.708333 8.84582 0.525 8.66249C0.341667 8.47915 0.25 8.25832 0.25 7.99999C0.25 7.74165 0.341667 7.52082 0.525 7.33749C0.708333 7.15415 0.929167 7.06249 1.1875 7.06249H12.15L7.325 2.23749C7.13333 2.04582 7.03958 1.82499 7.04375 1.57499C7.04792 1.32499 7.14583 1.10415 7.3375 0.912487C7.52917 0.729153 7.75 0.635403 8 0.631236C8.25 0.62707 8.47083 0.72082 8.6625 0.912487L15.0875 7.33749C15.1792 7.42915 15.2479 7.53124 15.2937 7.64374C15.3396 7.75624 15.3625 7.87499 15.3625 7.99999C15.3625 8.12499 15.3396 8.24374 15.2937 8.35624C15.2479 8.46874 15.1792 8.57082 15.0875 8.66249L8.6625 15.0875C8.47917 15.2708 8.26042 15.3625 8.00625 15.3625C7.75208 15.3625 7.52917 15.2708 7.3375 15.0875C7.14583 14.8958 7.05 14.6729 7.05 14.4187C7.05 14.1646 7.14583 13.9417 7.3375 13.75L12.15 8.93749Z" fill="white" />
                              </svg></a></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <style dangerouslySetInnerHTML={{ __html: "\n   :root {\n      --slide-shadow-color1_0: #FF8095;\n      --slide-shadow-color2_0: #FF3355;\n   }\n" }} />
        <style dangerouslySetInnerHTML={{ __html: "\n   :root {\n      --slide-shadow-color1_1: #FF5640;\n      --slide-shadow-color2_1: #F91E02;\n   }\n" }} />
        <style dangerouslySetInnerHTML={{ __html: "\n   :root {\n      --slide-shadow-color1_2: #ECFAFF;\n      --slide-shadow-color2_2: #210c56;\n   }\n" }} />
        <style dangerouslySetInnerHTML={{ __html: "\n   :root {\n      --slide-shadow-color1_3: #EF2E00;\n      --slide-shadow-color2_3: #EF2E00;\n   }\n" }} />
        <style dangerouslySetInnerHTML={{ __html: "\n   :root {\n      --bunner_text_shadow_color1: #007BFF;\n      --bunner_text_shadow_color2: #24BBEC;\n      --button_gradient_color1: #24BBEC;\n      --button_gradient_color2: #24BBEC;\n      --border_block_color: #24BBEC66;\n   }\n" }} />
        <main>
          <section className="heading_section">
            <video id="heading_section_background_video" className="heading_section_background_video" preload="none" playsInline autoPlay muted loop>
              <source src="https://hardskill.exchange/wp-content/uploads/2025/07/BG_A_loop_.mp4" type="video/mp4" />
            </video>
            <div className="heading_section_wrapper">
              <h1 className="heading_section_title">The Stock Market&nbsp;of&nbsp;Skills</h1>
              <div className="heading_section_content">
                <div style={{ maxWidth: 800, margin: '0 auto 3vh' }}>What AI hasn’t learned yet, you can. Agentic scale, evolving
                  business models, and AI-native GTM—exchanged 1:1 with operators executing at the edge.</div>
              </div>
              <div className="search_block" style={{ opacity: 1 }}>
                <div className="search_blok_icon_container">
                  <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.54189 12.8502C4.77306 12.8502 3.27597 12.2381 2.05064 11.0139C0.825474 9.78961 0.212891 8.29378 0.212891 6.52644C0.212891 4.75894 0.824974 3.2627 2.04914 2.0377C3.27347 0.812695 4.76931 0.200195 6.53664 0.200195C8.30414 0.200195 9.80039 0.812779 11.0254 2.03795C12.2504 3.26328 12.8629 4.76036 12.8629 6.52919C12.8629 7.24319 12.7504 7.92311 12.5254 8.56895C12.3004 9.21478 11.9921 9.78353 11.6004 10.2752L17.1409 15.8037C17.3222 15.9847 17.4129 16.2044 17.4129 16.4627C17.4129 16.721 17.3212 16.9419 17.1379 17.1252C16.9546 17.3085 16.7337 17.4002 16.4754 17.4002C16.2171 17.4002 15.9972 17.3096 15.8159 17.1284L10.2794 11.5877C9.78506 11.9877 9.21706 12.2981 8.57539 12.5189C7.93372 12.7398 7.25589 12.8502 6.54189 12.8502ZM6.53789 10.9752C7.77956 10.9752 8.83164 10.5439 9.69414 9.68145C10.5566 8.81894 10.9879 7.76686 10.9879 6.5252C10.9879 5.28353 10.5566 4.23145 9.69414 3.36895C8.83164 2.50645 7.77956 2.0752 6.53789 2.0752C5.29622 2.0752 4.24414 2.50645 3.38164 3.36895C2.51914 4.23145 2.08789 5.28353 2.08789 6.5252C2.08789 7.76686 2.51914 8.81894 3.38164 9.68145C4.24414 10.5439 5.29622 10.9752 6.53789 10.9752Z" fill="#808080" />
                  </svg>
                </div>
                <div className="search_blok_input_container">
                  <input type="text" placeholder="Search by skill or expert name" name="search_by_skill_coach" />
                  <div className="input_clean_button" style={{ display: 'none' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10" fill="none">
                      <path d="M5 6.3127L2.1 9.2252C1.91667 9.40853 1.69583 9.5002 1.4375 9.5002C1.17917 9.5002 0.958333 9.40853 0.775 9.2252C0.591667 9.04186 0.5 8.82103 0.5 8.5627C0.5 8.30436 0.591667 8.08353 0.775 7.9002L3.6875 5.0002L0.775 2.1127C0.591667 1.92936 0.5 1.70853 0.5 1.4502C0.5 1.19186 0.591667 0.971029 0.775 0.787695C0.958333 0.604362 1.17917 0.512695 1.4375 0.512695C1.69583 0.512695 1.91667 0.604362 2.1 0.787695L5 3.7002L7.8875 0.787695C8.07083 0.604362 8.29167 0.512695 8.55 0.512695C8.80833 0.512695 9.02917 0.604362 9.2125 0.787695C9.40417 0.979362 9.5 1.20228 9.5 1.45645C9.5 1.71061 9.40417 1.92936 9.2125 2.1127L6.3 5.0002L9.2125 7.9002C9.39583 8.08353 9.4875 8.30436 9.4875 8.5627C9.4875 8.82103 9.39583 9.04186 9.2125 9.2252C9.02083 9.41686 8.79792 9.5127 8.54375 9.5127C8.28958 9.5127 8.07083 9.41686 7.8875 9.2252L5 6.3127Z" fill="#808080" />
                    </svg>
                  </div>
                </div>
                <div className="result_block_padding_container">
                  <div className="result_block">
                    <div className="result_block_spiner">
                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#paint0_angular_1309_3891_clip_path)" data-figma-skip-parse="true">
                          <g transform="matrix(0.01 2.42143e-10 -2.42144e-10 0.01 10 10)">
                            <foreignObject x="-977.5" y="-977.5" width={1955} height={1955}>
                              <div style={{ background: 'conic-gradient(from 90deg,rgba(239, 86, 0, 0) 0deg,rgba(239, 86, 0, 1) 360deg)', height: '100%', width: '100%', opacity: 1 }}>
                              </div>
                            </foreignObject>
                          </g>
                        </g>
                        <path d="M10 19.75C8.6515 19.75 7.38425 19.4937 6.19825 18.981C5.01242 18.4682 3.98083 17.7723 3.1035 16.8935C2.22617 16.0145 1.53125 14.9826 1.01875 13.7978C0.50625 12.6131 0.25 11.3472 0.25 10C0.25 8.6515 0.506333 7.38425 1.019 6.19825C1.53183 5.01242 2.22767 3.98083 3.1065 3.1035C3.9855 2.22617 5.01742 1.53125 6.20225 1.01875C7.38692 0.50625 8.65283 0.25 10 0.25C11.3485 0.25 12.6158 0.506334 13.8018 1.019C14.9876 1.53183 16.0192 2.22767 16.8965 3.1065C17.7738 3.9855 18.4688 5.01742 18.9813 6.20225C19.4938 7.38692 19.75 8.65283 19.75 10C19.75 11.3485 19.4937 12.6158 18.981 13.8018C18.4682 14.9876 17.7723 16.0192 16.8935 16.8965C16.0145 17.7738 14.9826 18.4688 13.7977 18.9813C12.6131 19.4938 11.3472 19.75 10 19.75ZM10 17.875C12.1917 17.875 14.0521 17.1104 15.5813 15.5813C17.1104 14.0521 17.875 12.1917 17.875 10C17.875 7.80833 17.1104 5.94792 15.5813 4.41875C14.0521 2.88958 12.1917 2.125 10 2.125C7.80833 2.125 5.94792 2.88958 4.41875 4.41875C2.88958 5.94792 2.125 7.80833 2.125 10C2.125 12.1917 2.88958 14.0521 4.41875 15.5813C5.94792 17.1104 7.80833 17.875 10 17.875Z" data-figma-gradient-fill="{&quot;type&quot;:&quot;GRADIENT_ANGULAR&quot;,&quot;stops&quot;:[{&quot;color&quot;:{&quot;r&quot;:0.93725490570068359,&quot;g&quot;:0.33741176128387451,&quot;b&quot;:0.0,&quot;a&quot;:0.0},&quot;position&quot;:0.0},{&quot;color&quot;:{&quot;r&quot;:0.93725490570068359,&quot;g&quot;:0.33725491166114807,&quot;b&quot;:0.0,&quot;a&quot;:1.0},&quot;position&quot;:1.0}],&quot;stopsVar&quot;:[{&quot;color&quot;:{&quot;r&quot;:0.93725490570068359,&quot;g&quot;:0.33741176128387451,&quot;b&quot;:0.0,&quot;a&quot;:0.0},&quot;position&quot;:0.0},{&quot;color&quot;:{&quot;r&quot;:0.93725490570068359,&quot;g&quot;:0.33725491166114807,&quot;b&quot;:0.0,&quot;a&quot;:1.0},&quot;position&quot;:1.0}],&quot;transform&quot;:{&quot;m00&quot;:20.0,&quot;m01&quot;:-4.8428711352244136e-07,&quot;m02&quot;:-2.4898551487240184e-07,&quot;m10&quot;:4.8428648824483389e-07,&quot;m11&quot;:20.0,&quot;m12&quot;:-7.2675402407185175e-07},&quot;opacity&quot;:1.0,&quot;blendMode&quot;:&quot;NORMAL&quot;,&quot;visible&quot;:true}">
                        </path>
                        <defs>
                          <clipPath id="paint0_angular_1309_3891_clip_path">
                            <path d="M10 19.75C8.6515 19.75 7.38425 19.4937 6.19825 18.981C5.01242 18.4682 3.98083 17.7723 3.1035 16.8935C2.22617 16.0145 1.53125 14.9826 1.01875 13.7978C0.50625 12.6131 0.25 11.3472 0.25 10C0.25 8.6515 0.506333 7.38425 1.019 6.19825C1.53183 5.01242 2.22767 3.98083 3.1065 3.1035C3.9855 2.22617 5.01742 1.53125 6.20225 1.01875C7.38692 0.50625 8.65283 0.25 10 0.25C11.3485 0.25 12.6158 0.506334 13.8018 1.019C14.9876 1.53183 16.0192 2.22767 16.8965 3.1065C17.7738 3.9855 18.4688 5.01742 18.9813 6.20225C19.4938 7.38692 19.75 8.65283 19.75 10C19.75 11.3485 19.4937 12.6158 18.981 13.8018C18.4682 14.9876 17.7723 16.0192 16.8935 16.8965C16.0145 17.7738 14.9826 18.4688 13.7977 18.9813C12.6131 19.4938 11.3472 19.75 10 19.75ZM10 17.875C12.1917 17.875 14.0521 17.1104 15.5813 15.5813C17.1104 14.0521 17.875 12.1917 17.875 10C17.875 7.80833 17.1104 5.94792 15.5813 4.41875C14.0521 2.88958 12.1917 2.125 10 2.125C7.80833 2.125 5.94792 2.88958 4.41875 4.41875C2.88958 5.94792 2.125 7.80833 2.125 10C2.125 12.1917 2.88958 14.0521 4.41875 15.5813C5.94792 17.1104 7.80833 17.875 10 17.875Z">
                            </path>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="placeholder_experts">
                      <div className="placeholder_experts_title" />
                      <div className="placeholder_experts_items" />
                      <button className="placeholder_experts_link">Show more</button>
                    </div>
                    <div className="placeholder_experts_title" />
                    <div className="result_block_placeholder"> Enter at least two characters </div>
                    <div className="result_block_close_button">
                      <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10" fill="none">
                        <path d="M5 6.3127L2.1 9.2252C1.91667 9.40853 1.69583 9.5002 1.4375 9.5002C1.17917 9.5002 0.958333 9.40853 0.775 9.2252C0.591667 9.04186 0.5 8.82103 0.5 8.5627C0.5 8.30436 0.591667 8.08353 0.775 7.9002L3.6875 5.0002L0.775 2.1127C0.591667 1.92936 0.5 1.70853 0.5 1.4502C0.5 1.19186 0.591667 0.971029 0.775 0.787695C0.958333 0.604362 1.17917 0.512695 1.4375 0.512695C1.69583 0.512695 1.91667 0.604362 2.1 0.787695L5 3.7002L7.8875 0.787695C8.07083 0.604362 8.29167 0.512695 8.55 0.512695C8.80833 0.512695 9.02917 0.604362 9.2125 0.787695C9.40417 0.979362 9.5 1.20228 9.5 1.45645C9.5 1.71061 9.40417 1.92936 9.2125 2.1127L6.3 5.0002L9.2125 7.9002C9.39583 8.08353 9.4875 8.30436 9.4875 8.5627C9.4875 8.82103 9.39583 9.04186 9.2125 9.2252C9.02083 9.41686 8.79792 9.5127 8.54375 9.5127C8.28958 9.5127 8.07083 9.41686 7.8875 9.2252L5 6.3127Z" fill="#808080" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="search_block_close_button">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <mask id="mask0_1309_418" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x={0} y={0} width={24} height={24}>
                      <rect width={24} height={24} fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1309_418)">
                      <path d="M11.9996 13.3253L7.13706 18.1878C6.95373 18.3712 6.73289 18.4608 6.47456 18.4566C6.21623 18.4524 5.99539 18.3587 5.81206 18.1753C5.63706 17.992 5.55164 17.7733 5.55581 17.5191C5.55998 17.2649 5.64956 17.0503 5.82456 16.8753L10.6746 12.0003L5.82456 7.12533C5.64956 6.95033 5.56206 6.73575 5.56206 6.48158C5.56206 6.22742 5.64956 6.00867 5.82456 5.82533C5.99956 5.642 6.21623 5.54825 6.47456 5.54408C6.73289 5.53992 6.95373 5.6295 7.13706 5.81283L11.9996 10.6753L16.8621 5.81283C17.0454 5.6295 17.2662 5.53992 17.5246 5.54408C17.7829 5.54825 18.0037 5.642 18.1871 5.82533C18.3621 6.00867 18.4475 6.22742 18.4433 6.48158C18.4391 6.73575 18.3496 6.95033 18.1746 7.12533L13.3246 12.0003L18.1746 16.8753C18.3496 17.0503 18.4371 17.2649 18.4371 17.5191C18.4371 17.7733 18.3496 17.992 18.1746 18.1753C17.9996 18.3587 17.7829 18.4524 17.5246 18.4566C17.2662 18.4608 17.0454 18.3712 16.8621 18.1878L11.9996 13.3253Z" fill="white" />
                    </g>
                  </svg>
                </div>
              </div>
              <ul className="heading_section_news">
                <li className="heading_section_news__item news_item">
                  <div className="news_item__title">Market Movers</div>
                  <div className="news_item_content">
                    <div className="news_item_content_italic">Skills gaining the most traction:</div>
                    <div className="news_item_content_normal">Agentic Scaling</div>
                  </div>
                  <a href="https://hardskill.exchange/skills/" className="news_item_link"> Browse Skill Index <svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.76659 6.12499H1.45825C1.28603 6.12499 1.13881 6.06388 1.01659 5.94166C0.894363 5.81943 0.833252 5.67221 0.833252 5.49999C0.833252 5.32777 0.894363 5.18055 1.01659 5.05832C1.13881 4.9361 1.28603 4.87499 1.45825 4.87499H8.76659L5.54992 1.65832C5.42214 1.53055 5.35964 1.38332 5.36242 1.21666C5.3652 1.04999 5.43047 0.902769 5.55825 0.774991C5.68603 0.652769 5.83325 0.590269 5.99992 0.587491C6.16659 0.584713 6.31381 0.647213 6.44159 0.774991L10.7249 5.05832C10.786 5.11943 10.8319 5.18749 10.8624 5.26249C10.893 5.33749 10.9083 5.41666 10.9083 5.49999C10.9083 5.58332 10.893 5.66249 10.8624 5.73749C10.8319 5.81249 10.786 5.88055 10.7249 5.94166L6.44159 10.225C6.31936 10.3472 6.17353 10.4083 6.00409 10.4083C5.83464 10.4083 5.68603 10.3472 5.55825 10.225C5.43047 10.0972 5.36659 9.9486 5.36659 9.77916C5.36659 9.60971 5.43047 9.4611 5.55825 9.33332L8.76659 6.12499Z" fill="#F80000" />
                  </svg>
                  </a>
                </li>
                <li className="heading_section_news__item news_item">
                  <div className="news_item__title">Strategic Pairings</div>
                  <div className="news_item_content">
                    <div className="news_item_content_italic">Most booked together by GTM teams:</div>
                    <div className="news_item_content_normal">AI Prospecting + AI RevOps</div>
                  </div>
                  <a href="https://hardskill.exchange/skills/" className="news_item_link"> View Pair Combos <svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.76659 6.12499H1.45825C1.28603 6.12499 1.13881 6.06388 1.01659 5.94166C0.894363 5.81943 0.833252 5.67221 0.833252 5.49999C0.833252 5.32777 0.894363 5.18055 1.01659 5.05832C1.13881 4.9361 1.28603 4.87499 1.45825 4.87499H8.76659L5.54992 1.65832C5.42214 1.53055 5.35964 1.38332 5.36242 1.21666C5.3652 1.04999 5.43047 0.902769 5.55825 0.774991C5.68603 0.652769 5.83325 0.590269 5.99992 0.587491C6.16659 0.584713 6.31381 0.647213 6.44159 0.774991L10.7249 5.05832C10.786 5.11943 10.8319 5.18749 10.8624 5.26249C10.893 5.33749 10.9083 5.41666 10.9083 5.49999C10.9083 5.58332 10.893 5.66249 10.8624 5.73749C10.8319 5.81249 10.786 5.88055 10.7249 5.94166L6.44159 10.225C6.31936 10.3472 6.17353 10.4083 6.00409 10.4083C5.83464 10.4083 5.68603 10.3472 5.55825 10.225C5.43047 10.0972 5.36659 9.9486 5.36659 9.77916C5.36659 9.60971 5.43047 9.4611 5.55825 9.33332L8.76659 6.12499Z" fill="#F80000" />
                  </svg>
                  </a>
                </li>
                <li className="heading_section_news__item news_item">
                  <div className="news_item__title">Community Signals</div>
                  <div className="news_item_content">
                    <div className="news_item_content_italic">Most viewed and shared this week:</div>
                    <div className="news_item_content_normal">Agentic AI Summit</div>
                  </div>
                  <a href="https://hardskill.exchange/summit/agentic-ai-summit/" className="news_item_link"> Watch What’s
                    Trending <svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.76659 6.12499H1.45825C1.28603 6.12499 1.13881 6.06388 1.01659 5.94166C0.894363 5.81943 0.833252 5.67221 0.833252 5.49999C0.833252 5.32777 0.894363 5.18055 1.01659 5.05832C1.13881 4.9361 1.28603 4.87499 1.45825 4.87499H8.76659L5.54992 1.65832C5.42214 1.53055 5.35964 1.38332 5.36242 1.21666C5.3652 1.04999 5.43047 0.902769 5.55825 0.774991C5.68603 0.652769 5.83325 0.590269 5.99992 0.587491C6.16659 0.584713 6.31381 0.647213 6.44159 0.774991L10.7249 5.05832C10.786 5.11943 10.8319 5.18749 10.8624 5.26249C10.893 5.33749 10.9083 5.41666 10.9083 5.49999C10.9083 5.58332 10.893 5.66249 10.8624 5.73749C10.8319 5.81249 10.786 5.88055 10.7249 5.94166L6.44159 10.225C6.31936 10.3472 6.17353 10.4083 6.00409 10.4083C5.83464 10.4083 5.68603 10.3472 5.55825 10.225C5.43047 10.0972 5.36659 9.9486 5.36659 9.77916C5.36659 9.60971 5.43047 9.4611 5.55825 9.33332L8.76659 6.12499Z" fill="#F80000" />
                    </svg>
                  </a>
                </li>
              </ul>
              <div className="heading_logos_slider">
                <div className="logos_container"><a href="#" className="logo_item"><img src="https://hardskill.exchange/wp-content/uploads/2025/01/logo-outreach.svg" alt="image" /></a><a href="#" className="logo_item"><img src="https://hardskill.exchange/wp-content/uploads/2025/01/state1.svg" alt="image" /></a><a href="#" className="logo_item"><img src="https://hardskill.exchange/wp-content/uploads/2025/01/state1-1.svg" alt="image" /></a><a href="#" className="logo_item"><img src="https://hardskill.exchange/wp-content/uploads/2025/01/state1-2.svg" alt="image" /></a><a href="#" className="logo_item"><img src="https://hardskill.exchange/wp-content/uploads/2025/01/state1-3.svg" alt="image" /></a><a href="#" className="logo_item"><img src="https://hardskill.exchange/wp-content/uploads/2025/01/state1-4.svg" alt="image" /></a><a href="#" className="logo_item"><img src="https://hardskill.exchange/wp-content/uploads/2025/01/state1-5.svg" alt="image" /></a></div>
                <div className="logos_container active"><a href="#" className="logo_item"><img src="https://hardskill.exchange/wp-content/uploads/2025/01/state2.svg" alt="image" /></a><a href="#" className="logo_item"><img src="https://hardskill.exchange/wp-content/uploads/2025/01/state2-1.svg" alt="image" /></a><a href="#" className="logo_item"><img src="https://hardskill.exchange/wp-content/uploads/2025/01/state2-2.svg" alt="image" /></a><a href="#" className="logo_item"><img src="https://hardskill.exchange/wp-content/uploads/2025/01/state2-3.svg" alt="image" /></a><a href="#" className="logo_item"><img src="https://hardskill.exchange/wp-content/uploads/2025/01/state2-4.svg" alt="image" /></a><a href="#" className="logo_item"><img src="https://hardskill.exchange/wp-content/uploads/2025/01/state2-5.svg" alt="image" /></a><a href="#" className="logo_item"><img src="https://hardskill.exchange/wp-content/uploads/2025/01/state2-6.svg" alt="image" /></a></div>
              </div>
            </div>
            <div className="heading_section_bottom_shadow_block" />
          </section>
          <section className="slider_carts_section" id="slider_carts_section">
            <div className="slider_carts_section_content_block slider_content_block">
              <div className="slider_content_block_top_text over_title_text">The HSE Infrastructure</div>
              <h2>The GTM Exchange for the AI-Native Era</h2>
              <div className="slider_content_block_text">20,000+ CXOs, VCs, analysts, and operators. A stock market of GTM
                skills. Custom team training. HSE is where GTM leaders recalibrate through real-time exchange with operators
                deploying AI across Sales, Marketing, RevOps, and CS.</div>
            </div>
            <div className="button_wrap">
              <a target="_blank" href="https://app.hardskill.exchange/" className="white_button" rel="nofollow noopener noreferrer">
                <span>Explore <svg width={20} height={20} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.15 8.93749H1.1875C0.929167 8.93749 0.708333 8.84582 0.525 8.66249C0.341667 8.47915 0.25 8.25832 0.25 7.99999C0.25 7.74165 0.341667 7.52082 0.525 7.33749C0.708333 7.15415 0.929167 7.06249 1.1875 7.06249H12.15L7.325 2.23749C7.13333 2.04582 7.03958 1.82499 7.04375 1.57499C7.04792 1.32499 7.14583 1.10415 7.3375 0.912487C7.52917 0.729153 7.75 0.635403 8 0.631236C8.25 0.62707 8.47083 0.72082 8.6625 0.912487L15.0875 7.33749C15.1792 7.42915 15.2479 7.53124 15.2937 7.64374C15.3396 7.75624 15.3625 7.87499 15.3625 7.99999C15.3625 8.12499 15.3396 8.24374 15.2937 8.35624C15.2479 8.46874 15.1792 8.57082 15.0875 8.66249L8.6625 15.0875C8.47917 15.2708 8.26042 15.3625 8.00625 15.3625C7.75208 15.3625 7.52917 15.2708 7.3375 15.0875C7.14583 14.8958 7.05 14.6729 7.05 14.4187C7.05 14.1646 7.14583 13.9417 7.3375 13.75L12.15 8.93749Z" fill="#EF5600" />
                </svg>
                </span>
              </a>
            </div>
          </section>
          <section className="bunner_ai_practice_section practice_section">
            <div className="practice_section_container">
              <div className="practice_section_content">
                <div className="practice_section_over_title">AI Summit</div>
                <div className="practice_section_title">Agentic Distribution</div>
                <div className="practice_section_subtitle">The Machines Are the Channel Now</div>
                <div className="practice_section_date">September 16–18 • Online Summit • Free</div>
                <a target="_blank" className="orange_gradient_button" href="/summit/agentic-distribution/" rel="nofollow noopener noreferrer">Learn more</a>
              </div>
              <video id="practice_section_video_background" className="practice_section_video_background" preload="none" playsInline autoPlay muted loop>
                <source src="https://hardskill.exchange/wp-content/uploads/2025/08/BG_loop_.mp4" type="video/mp4" />
              </video>
            </div>
          </section>
          <section className="skills_section">
            <div className="skills_section_container">
              <h2 className="skills_section_title">Skill Ticker</h2>
              <div className="skills_section_subtitle_content">
                <p>Critical GTM skills reshaping Sales, Marketing, RevOps, and CS for the agentic AI era.</p>
              </div>
              <ul className="main_skills_list">
                <li className="main_skill"><a href="#">GTM / Revenue Architecture</a></li>
                <li className="main_skill"><a href="#">Forecasting</a></li>
                <li className="main_skill"><a href="#">AI Agents Orchestration</a></li>
                <li className="main_skill"><a href="#">AI for RevOps</a></li>
                <li className="main_skill"><a href="#">Signal-Based Sales</a></li>
                <li className="main_skill"><a href="#">Pricing Strategy</a></li>
                <li className="main_skill"><a href="#">Product-Market Fit (PMF)</a></li>
                <li className="main_skill"><a href="#">AI for Customer Success</a></li>
                <li className="main_skill"><a href="#">Product-Led Growth</a></li>
                <li className="main_skill"><a href="#">Tech Stack Optimization</a></li>
                <li className="main_skill"><a href="#">AI for Marketing</a></li>
                <li className="main_skill"><a href="#">AI SDRs</a></li>
              </ul>
              <a href="https://hardskill.exchange/skills/" className="skill_section_button orange_gradient_button">
                <span>Explore all Hard Skills</span>
                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.65 8.93749H1.6875C1.42917 8.93749 1.20833 8.84582 1.025 8.66249C0.841667 8.47915 0.75 8.25832 0.75 7.99999C0.75 7.74165 0.841667 7.52082 1.025 7.33749C1.20833 7.15415 1.42917 7.06249 1.6875 7.06249H12.65L7.825 2.23749C7.63333 2.04582 7.53958 1.82499 7.54375 1.57499C7.54792 1.32499 7.64583 1.10415 7.8375 0.912487C8.02917 0.729153 8.25 0.635403 8.5 0.631236C8.75 0.62707 8.97083 0.72082 9.1625 0.912487L15.5875 7.33749C15.6792 7.42915 15.7479 7.53124 15.7937 7.64374C15.8396 7.75624 15.8625 7.87499 15.8625 7.99999C15.8625 8.12499 15.8396 8.24374 15.7937 8.35624C15.7479 8.46874 15.6792 8.57082 15.5875 8.66249L9.1625 15.0875C8.97917 15.2708 8.76042 15.3625 8.50625 15.3625C8.25208 15.3625 8.02917 15.2708 7.8375 15.0875C7.64583 14.8958 7.55 14.6729 7.55 14.4187C7.55 14.1646 7.64583 13.9417 7.8375 13.75L12.65 8.93749Z" fill="white" />
                </svg>
              </a>
            </div>
          </section>
          <section className="coach_carousel_section raves-ticker-section overflow-hidden hyp-fadeIn coach-section">
            <div className="coach-container">
              <div className="coach_carousel_section_content_block coach_carousel_content_block">
                <div className="coach_carousel_content_block_top_text over_title_text">HSE Expert Preview</div>
                <h2>AI learns from patterns. Learn from the source</h2>
                <div style={{ maxWidth: 880 }} className="coach_carousel_content_block_text">Request coaching and strategic
                  sessions with CXOs, VCs, analysts, and operators shaping how agentic AI is redefining GTM execution,
                  business models, and scale. </div>
              </div>
              <div className="coaches_list_container">
                <div className="coach-item player">
                  <a className="coach-link" href="#request_coach" target="_blank" rel="nofollow noopener noreferrer">
                    <div className="coach_img_wrap"><img className="coach-img" src="https://hardskill.exchange/wp-content/webp-express/webp-images/uploads/2025/07/coaches-main-page_Carilu-Dietrich-2.png.webp" alt="image" /></div>
                    <p className="coach-post" />
                    <p><span className="speacker_block_person_work_name">Carilu Dietrich</span></p>
                    <p>CMO, Hypergrowth Advisor,<br /> Took <strong>Atlassian</strong> Public</p>
                    <div className="new_expert_label">New Expert</div>
                    <div className="ai_expert_label">Exclusive on HSE</div>
                  </a>
                </div>
                <div className="coach-item playerai_expert">
                  <a className="coach-link" href="https://app.hardskill.exchange/marketplace/mark-organ/" target="_blank" rel="nofollow noopener noreferrer">
                    <div className="coach_img_wrap"><img className="coach-img" src="https://hardskill.exchange/wp-content/webp-express/webp-images/uploads/2025/07/coaches-main-page_Mark-Organ-.png.webp" alt="image" /></div>
                    <p className="coach-post" />
                    <p>Mark Organ</p>
                    <p>CEO, <strong>Categorynauts</strong>, Founding CEO of <strong>Influitive</strong> and
                      <strong>Eloqua</strong></p>
                    <div className="new_expert_label">New Expert</div>
                    <div className="ai_expert_label">Exclusive on HSE</div>
                  </a>
                </div>
                <div className="coach-item player">
                  <a className="coach-link" href="https://app.hardskill.exchange/marketplace/mary-shea-phd/" target="_blank" rel="nofollow noopener noreferrer">
                    <div className="coach_img_wrap"><img className="coach-img" src="https://hardskill.exchange/wp-content/webp-express/webp-images/uploads/2025/07/coaches-main-page_Mary-Shea-2.png.webp" alt="image" /></div>
                    <p className="coach-post" />
                    <p>Mary Shea</p>
                    <p>Operator, Analyst, Ex- <strong>Forrester</strong>,<br /> Ex- <strong>Outreach</strong></p>
                    <div className="new_expert_label">New Expert</div>
                    <div className="ai_expert_label">Exclusive on HSE</div>
                  </a>
                </div>
                <div className="coach-item playernew_expert">
                  <a className="coach-link" href="https://app.hardskill.exchange/marketplace/chang-chen/" target="_blank" rel="nofollow noopener noreferrer">
                    <div className="coach_img_wrap"><img className="coach-img" src="https://hardskill.exchange/wp-content/webp-express/webp-images/uploads/2025/07/coaches-main-page_Chang-Chen-.png.webp" alt="image" /></div>
                    <p className="coach-post" />
                    <p>Chang Chen</p>
                    <p>Growth Advisor, 3X Exits, Ex- <strong>Otter.ai</strong>,<br />
                      <strong>Bardeen.ai, Heygen, Microsoft</strong>
                    </p>
                    <div className="new_expert_label">New Expert</div>
                    <div className="ai_expert_label">Exclusive on HSE</div>
                  </a>
                </div>
                <div className="coach-item player">
                  <a className="coach-link" href="#request_coach" target="_blank" rel="nofollow noopener noreferrer">
                    <div className="coach_img_wrap"><img className="coach-img" src="https://hardskill.exchange/wp-content/webp-express/webp-images/uploads/2025/07/coaches-main-page_Manny-Medina.png.webp" alt="image" /></div>
                    <p className="coach-post" />
                    <p><span className="speacker_block_person_work_name">Manny Medina</span></p>
                    <p>Co-Founder &amp; CEO, <strong>Paid</strong></p>
                    <div className="new_expert_label">New Expert</div>
                    <div className="ai_expert_label">Exclusive on HSE</div>
                  </a>
                </div>
                <div className="coach-item player">
                  <a className="coach-link" href="#request_coach" target="_blank" rel="nofollow noopener noreferrer">
                    <div className="coach_img_wrap"><img className="coach-img" src="https://hardskill.exchange/wp-content/webp-express/webp-images/uploads/2025/07/coaches-main-page_Sandy-Diao.png.webp" alt="image" /></div>
                    <p className="coach-post" />
                    <p><span className="speacker_block_person_work_name">Sandy Diao</span></p>
                    <p>Growth, <strong>Meta, Pinterest, Descript</strong></p>
                    <div className="new_expert_label">New Expert</div>
                    <div className="ai_expert_label">Exclusive on HSE</div>
                  </a>
                </div>
                <div className="coach-item player">
                  <a className="coach-link" href="#request_coach" target="_blank" rel="nofollow noopener noreferrer">
                    <div className="coach_img_wrap"><img className="coach-img" src="https://hardskill.exchange/wp-content/webp-express/webp-images/uploads/2025/07/coaches-main-page_Doug-Landis.png.webp" alt="image" /></div>
                    <p className="coach-post" />
                    <p><span className="speacker_block_person_work_name">Doug Landis</span></p>
                    <p>Chief Executive Officer, <strong>DLA</strong>,<br /> Ex-<strong>Emergence Capital, Box</strong></p>
                    <div className="new_expert_label">New Expert</div>
                    <div className="ai_expert_label">Exclusive on HSE</div>
                  </a>
                </div>
                <div className="coach-item player">
                  <a className="coach-link" href="https://app.hardskill.exchange/marketplace/kerry-cunningham/" target="_blank" rel="nofollow noopener noreferrer">
                    <div className="coach_img_wrap"><img className="coach-img" src="https://hardskill.exchange/wp-content/webp-express/webp-images/uploads/2025/07/coaches-main-page_Kerry-Cunningham.png.webp" alt="image" /></div>
                    <p className="coach-post" />
                    <p>Kerry Cunningham</p>
                    <p>Research &amp; Thought Leadership, <strong>6sense</strong></p>
                    <div className="new_expert_label">New Expert</div>
                    <div className="ai_expert_label">Exclusive on HSE</div>
                  </a>
                </div>
                <div className="coach-item player">
                  <a className="coach-link" href="#request_coach" target="_blank" rel="nofollow noopener noreferrer">
                    <div className="coach_img_wrap"><img className="coach-img" src="https://hardskill.exchange/wp-content/webp-express/webp-images/uploads/2025/07/coaches-main-page_Kathleen-Estreich.png.webp" alt="image" /></div>
                    <p className="coach-post" />
                    <p><span className="speacker_block_person_work_name">Kathleen Estreich</span></p>
                    <p>Partner, <strong>Pear VC</strong></p>
                    <div className="new_expert_label">New Expert</div>
                    <div className="ai_expert_label">Exclusive on HSE</div>
                  </a>
                </div>
                <div className="coach-item player">
                  <a className="coach-link" href="https://app.hardskill.exchange/marketplace/jay-mcbain/" target="_blank" rel="nofollow noopener noreferrer">
                    <div className="coach_img_wrap"><img className="coach-img" src="https://hardskill.exchange/wp-content/webp-express/webp-images/uploads/2025/07/coaches-main-page_Jay-McBain.png.webp" alt="image" /></div>
                    <p className="coach-post" />
                    <p>Jay McBain</p>
                    <p>Chief Analyst, Canalys
                    </p>
                    <div className="new_expert_label">New Expert</div>
                    <div className="ai_expert_label">Exclusive on HSE</div>
                  </a>
                </div>
              </div>
              <a target="_blank" href="https://app.hardskill.exchange/" className="white_button" rel="nofollow noopener noreferrer">
                <span>Explore <svg width={20} height={20} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.15 8.93749H1.1875C0.929167 8.93749 0.708333 8.84582 0.525 8.66249C0.341667 8.47915 0.25 8.25832 0.25 7.99999C0.25 7.74165 0.341667 7.52082 0.525 7.33749C0.708333 7.15415 0.929167 7.06249 1.1875 7.06249H12.15L7.325 2.23749C7.13333 2.04582 7.03958 1.82499 7.04375 1.57499C7.04792 1.32499 7.14583 1.10415 7.3375 0.912487C7.52917 0.729153 7.75 0.635403 8 0.631236C8.25 0.62707 8.47083 0.72082 8.6625 0.912487L15.0875 7.33749C15.1792 7.42915 15.2479 7.53124 15.2937 7.64374C15.3396 7.75624 15.3625 7.87499 15.3625 7.99999C15.3625 8.12499 15.3396 8.24374 15.2937 8.35624C15.2479 8.46874 15.1792 8.57082 15.0875 8.66249L8.6625 15.0875C8.47917 15.2708 8.26042 15.3625 8.00625 15.3625C7.75208 15.3625 7.52917 15.2708 7.3375 15.0875C7.14583 14.8958 7.05 14.6729 7.05 14.4187C7.05 14.1646 7.14583 13.9417 7.3375 13.75L12.15 8.93749Z" fill="#EF5600" />
                </svg>
                </span>
              </a>
            </div>
          </section>
          <section className="instruction_section">
            <div className="instruction_section_container">
              <div className="instruction_section_content_block instruction_content_block">
                <div className="instruction_content_block_top_text over_title_text">How it works</div>
                <h2>GTM Strategy Before It’s Searchable</h2>
                <div style={{ maxWidth: 880 }} className="instruction_content_block_text">Start with a skill. Get matched with
                  the operator deploying it—before everyone’s using it, citing it, or it shows up in generative search.
                </div>
              </div>
              <div className="instruction_steps_container">
                <div className="instruction_step">
                  <div className="instruction_step_title_block">
                    <div className="instruction_step_title">Select the Capability</div>
                    <div className="instruction_step_number">1</div>
                  </div>
                  <div className="instruction_step_text_image_flex_container">
                    <div className="instruction_step_text">
                      <p>Start with the outcome. Browse high-leverage skills—Retention Prediction, Agentic GTM, Revenue
                        Orchestration—and match with operators who’ve executed in your context.</p>
                    </div>
                    <div className="instruction_step_image">
                      <img src="https://hardskill.exchange/wp-content/webp-express/webp-images/uploads/2025/01/image-7.png.webp" alt="image" />
                    </div>
                  </div>
                </div>
                <div className="instruction_step">
                  <div className="instruction_step_title_block">
                    <div className="instruction_step_title">Book a 1:1 Session</div>
                    <div className="instruction_step_number">2</div>
                  </div>
                  <div className="instruction_step_text_image_flex_container">
                    <div className="instruction_step_text">
                      <p>Work directly with operators who’ve deployed the skill. Engage through coaching, mentorship,
                        consulting, or strategic review—focused on solving real challenges with applied insight.</p>
                    </div>
                    <div className="instruction_step_image">
                      <img src="https://hardskill.exchange/wp-content/webp-express/webp-images/uploads/2025/01/image-8.png.webp" alt="image" />
                    </div>
                  </div>
                </div>
                <div className="instruction_step">
                  <div className="instruction_step_title_block">
                    <div className="instruction_step_title">Apply, Expand, Exchange</div>
                    <div className="instruction_step_number">3</div>
                  </div>
                  <div className="instruction_step_text_image_flex_container">
                    <div className="instruction_step_text">
                      <p>Put the insight to work. Explore adjacent AI GTM strategies, emerging models, and disruptive
                        capabilities. Then contribute your edge, sharing back into the system.</p>
                    </div>
                    <div className="instruction_step_image">
                      <img src="https://hardskill.exchange/wp-content/webp-express/webp-images/uploads/2025/07/image-75.png.webp" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text_under_instruction_step">
                <p>HSE sessions are eligible for <strong>reimbursement</strong> through most L&amp;D and professional
                  development budgets.</p>
              </div>
              <a href="https://hardskill.exchange/terms-of-use/" className="instruction_section_button orange_gradient_button"><span>Learn more</span></a>
              <div className="testimonial_block">
                <div className="testimonial_block_content">
                  <div className="testimonial_title">“Immediately implementable coaching from somebody who is actually in the
                    trenches”</div>
                  <div className="testimonial_name_position_wrapper">
                    <div className="testimonial_name_coach">James Ferguson</div>
                    <div className="testimonial_coach_position">
                      <p>Head of Business Development, <strong>Sybill</strong></p>
                    </div>
                  </div>
                  <span className="watch_full_testimonial" data-linkid="r2su8tkZgUg">Watch full testimonial</span>
                </div>
                <div className="testimonial_block_content_video">
                  <div className="watch_full_testimonial" data-linkid="r2su8tkZgUg">
                    <video className="testimonial_block_background_video" playsInline autoPlay muted loop>
                      <source src="https://hardskill.exchange/wp-content/uploads/2024/09/video-landing-James-Ferguson.min_.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="for_teams_section">
            <div className="for_teams_section_container">
              <div className="hse_for_teams_top_content_block">
                <div className="over_title_text">HSE for teams</div>
                <h2>AI-Native Enablement</h2>
                <div className="hse_for_teams_top_content_block_large_text">Whether you’re upskilling, retooling, or
                  stress-testing strategy, every program starts with your goals—not a static curriculum.</div>
                <div className="hse_for_teams_top_content_block_text">We work backward from outcomes to design sessions around
                  your GTM motion, business model, and team architecture, led by operators with firsthand execution
                  experience.</div>
              </div>
            </div>
            <div className="button_wrap">
              <a href="/hse-for-teams/" className="orange_gradient_button"><span>Learn more</span></a>
            </div>
          </section>
          <section className="events_slider_carts_section">
            <div className="slider_carts_section_content_block slider_content_block">
              <div className="slider_content_block_top_text over_title_text">HSE community events</div>
              <h2>Strategic Summits. Tactical Sessions. One GTM Exchange</h2>
              <div style={{ maxWidth: 880 }} className="slider_content_block_text">Join forces with over 20,000 top SaaS
                executives, CXOs, VCs, top operators, and analysts at HSE’s AI Summits, AI Practice Sessions, CXO Games,
                roundtables and AMAs. Get insider insights on go-to-market trends, AI, and revenue strategies to help you
                and your team stay sharp, scale fast, and dominate 2025.</div>
            </div>
            <div className="slider_carts">
              <div className="slider_item slider_item_0">
                <video className="slider_item_background_video" playsInline autoPlay muted loop>
                  <source src="https://hardskill.exchange/wp-content/uploads/2025/04/HEAD_CC_loop_12sec_.mp4" type="video/mp4" />
                </video>
                <div className="slide-content">
                  <div className="slide_content_data_block">
                    <div className="slide_content_data_block_title">AI Summit</div>
                  </div>
                  <div className="slide-content_top">
                    <div>Agentic AI: The Dawn of AI-native GTM</div>
                  </div>
                  <div className="slide-content_grow_block" />
                  <p>Gone are the days of bloated headcounts; agentic AI empowers hyper-lean teams to surge toward $100M
                    ARR. This summit is your front-row seat to the dawn...</p>
                  <a target="_blank" className="white_button" href="https://hardskill.exchange/summit/agentic-ai-summit/" rel="nofollow noopener noreferrer">Learn more</a>
                </div>
              </div>
              <div className="slider_item slider_item_1">
                <video className="slider_item_background_video" playsInline autoPlay muted loop>
                  <source src="https://hardskill.exchange/wp-content/uploads/2025/05/BG_loop_16-sec_.mp4" type="video/mp4" />
                </video>
                <div className="slide-content">
                  <div className="slide_content_data_block">
                    <div className="slide_content_data_block_title">AI Practice Session</div>
                  </div>
                  <div className="slide-content_top">
                    <div>Agentic Scaling</div>
                  </div>
                  <div className="slide-content_grow_block" />
                  <p>The traditional GTM model faces a classic innovator’s dilemma under the pressures of AI-native
                    scaling. Methods that previously drove success risk becoming...</p>
                  <a target="_blank" className="white_button" href="https://hardskill.exchange/ai-practice-sessions/agentic-scaling/" rel="nofollow noopener noreferrer">Learn more</a>
                </div>
              </div>
              <div className="slider_item slider_item_2">
                <video className="slider_item_background_video" playsInline autoPlay muted loop>
                  <source src="https://hardskill.exchange/wp-content/uploads/2025/01/fin5555.mp4" type="video/mp4" />
                </video>
                <div className="slide-content">
                  <div className="slide_content_data_block">
                    <div className="slide_content_data_block_title">AI Summit</div>
                  </div>
                  <div className="slide-content_top">
                    <div>AI-Led Growth</div>
                  </div>
                  <div className="slide-content_grow_block" />
                  <p>AI is rewriting the rules of go-to-market strategies. This is your opportunity to join the
                    conversation with top CXOs, GTM pioneers, analysts, and VCs. Explore how...</p>
                  <a target="_blank" className="white_button" href="https://hardskill.exchange/summit/ai-led-growth/" rel="nofollow noopener noreferrer">Learn more</a>
                </div>
              </div>
              <div className="slider_item slider_item_3">
                <video className="slider_item_background_video" playsInline autoPlay muted loop>
                  <source src="https://hardskill.exchange/wp-content/uploads/2024/12/BG_loop_red_6sec__.mp4" type="video/mp4" />
                </video>
                <div className="slide-content">
                  <div className="slide_content_data_block">
                    <div className="slide_content_data_block_title">AI Practice Session</div>
                  </div>
                  <div className="slide-content_top">
                    <div>Prospecting Methods 2025</div>
                  </div>
                  <div className="slide-content_grow_block" />
                  <p>Learn how top B2B teams use AI for pipeline growth through personalized outreach, predictive
                    targeting, and AI-powered SDRs.</p>
                  <a target="_blank" className="white_button" href="/ai-practice-sessions/prospecting-methods-2025/" rel="nofollow noopener noreferrer">Learn more</a>
                </div>
              </div>
            </div>
            <div className="button_wrap">
              <a href="/resources/" className="orange_gradient_button"><span>Learn more</span></a>
            </div>
          </section>
          <section className="stock_market_section">
            <video id="stock_market_section_background_video" className="stock_market_section_background_video" preload="none" playsInline autoPlay muted loop>
              <source src="https://hardskill.exchange/wp-content/uploads/2025/07/istock-1167566723.mp4" type="video/mp4" />
            </video>
            <div className="stock_market_top_content_block">
              <div style={{ maxHeight: 0, padding: 0 }} className="over_title_text" />
              <h2>About HSE</h2>
              <div style={{ maxHeight: 0, padding: 0 }} className="stock_market_top_content_block_text" />
            </div>
            <div className="stock_market_section_content">
              <div>Hard Skill Exchange is the infrastructure layer for AI-native go-to-market (GTM) innovation.</div>
              <div style={{ maxWidth: 800, margin: '0 auto 24px' }}>Structured as a stock market, it’s where emerging competency
                is exchanged directly with operators deploying it—before it has a name or a category.</div>
              <div style={{ maxWidth: 800, margin: '0 auto 24px' }}>HSE provides a live ticker of the most in-demand expertise
                across a network of 20,000+ executives, operators, analysts, and VCs.</div>
              <div>Members solve high-stakes challenges through situational coaching, mentorship, consulting, strategic
                review, workshops, custom enablement programs, and structured events—including AI Summits and AI Practice
                Sessions –&nbsp;then contribute their own edge back into the system.</div>
            </div>
            <div className="button_wrap">
              <a href="https://app.hardskill.exchange/" className="orange_gradient_button"><span>Learn more</span></a>
            </div>
            <div className="stock_market_section_radial_gradient" />
          </section>
          <section className="in_the_press_section">
            <div className="in_the_press_top_content_block">
              <div className="over_title_text" />
              <h2>Press for GEO</h2>
            </div>
            <div className="raves-ticker-section promo-logos-track hyp-fadeIn">
              <div className="raves-ticker-container promo-logos-track">
                <div className="raves-ticker d-flex text-center">
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/world-financial-review.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/authority-magazine-1.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/benzinga.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/boss-magazine.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/business-insider.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/ceo-weekly.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/digital-journal.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/the-enterprise-world.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/european-business-review.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/indie-hackers.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/la-wire.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/msn.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/new-york-tech.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/new-york-weekly.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/news-break.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/ritz-herald.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/sf-examiner.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/street-insider.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/talk-markets.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/tech-bullion.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/usa-today.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/valiant-ceo.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/venture-beat.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/world-financial-review.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/authority-magazine-1.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/benzinga.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/boss-magazine.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/business-insider.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/ceo-weekly.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/digital-journal.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/the-enterprise-world.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/european-business-review.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/indie-hackers.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/la-wire.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/msn.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/new-york-tech.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/new-york-weekly.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/news-break.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/ritz-herald.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/sf-examiner.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/street-insider.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/talk-markets.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/tech-bullion.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/usa-today.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/valiant-ceo.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/venture-beat.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/world-financial-review.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/authority-magazine-1.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/benzinga.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/boss-magazine.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/business-insider.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/ceo-weekly.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/digital-journal.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/the-enterprise-world.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/european-business-review.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/indie-hackers.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/la-wire.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/msn.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/new-york-tech.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/new-york-weekly.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/news-break.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/ritz-herald.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/sf-examiner.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/street-insider.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/talk-markets.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/tech-bullion.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/usa-today.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/valiant-ceo.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/venture-beat.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/world-financial-review.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/authority-magazine-1.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/benzinga.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/boss-magazine.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/business-insider.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/ceo-weekly.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/digital-journal.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/the-enterprise-world.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/european-business-review.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/indie-hackers.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/la-wire.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/msn.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/new-york-tech.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/new-york-weekly.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/news-break.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/ritz-herald.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/sf-examiner.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/street-insider.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/talk-markets.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/tech-bullion.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/usa-today.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/valiant-ceo.svg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="https://hardskill.exchange/wp-content/uploads/2024/11/venture-beat.svg" alt="image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-wrapper" style={{ margin: '0px -80px' }}>
              <div className="slick-slider slick-initialized"><button className="slick-prev slick-arrow" style={{}}>
                <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.54159 7.78117L7.56242 11.802C7.72214 11.9617 7.80027 12.1458 7.79679 12.3541C7.79332 12.5624 7.71172 12.7464 7.552 12.9062C7.39228 13.0589 7.20825 13.1371 6.99992 13.1405C6.79159 13.144 6.60756 13.0659 6.44784 12.9062L1.09367 7.552C1.01728 7.47561 0.959988 7.39054 0.921794 7.29679C0.883599 7.20304 0.864502 7.10409 0.864502 6.99992C0.864502 6.89575 0.883599 6.79679 0.921794 6.70304C0.959988 6.60929 1.01728 6.52422 1.09367 6.44784L6.44784 1.09367C6.60061 0.940891 6.78291 0.864502 6.99471 0.864502C7.20652 0.864502 7.39228 0.940891 7.552 1.09367C7.71172 1.25339 7.79159 1.43915 7.79159 1.65096C7.79159 1.86277 7.71172 2.04853 7.552 2.20825L3.54159 6.21867H12.677C12.8923 6.21867 13.0763 6.29506 13.2291 6.44784C13.3819 6.60061 13.4583 6.78464 13.4583 6.99992C13.4583 7.2152 13.3819 7.39922 13.2291 7.552C13.0763 7.70478 12.8923 7.78117 12.677 7.78117H3.54159Z" fill="white" />
                </svg>
              </button>
                <div aria-live="polite" className="slick-list draggable" style={{ padding: 0 }}>
                  <div className="slick-track" style={{ opacity: 1, width: 8498, transform: 'translate3d(-2428px, 0px, 0px)' }} role="listbox">
                    <div className="slider-item slick-slide slick-cloned" data-slick-index={-4} aria-hidden="true" style={{ width: 587 }} tabIndex={-1}>
                      <div className="slider-item_text">
                        <p>“What truly sets HSE apart is its<br /> emphasis on individualized learning pathways, driven by
                          AI“</p>
                      </div>
                      <div className="slider_item_author"><img src="https://hardskill.exchange/wp-content/uploads/2024/08/logo-29.svg" alt="logo" /> </div>
                    </div>
                    <div className="slider-item slick-slide slick-cloned" data-slick-index={-3} aria-hidden="true" style={{ width: 587 }} tabIndex={-1}>
                      <div className="slider-item_text">
                        <p>“HSE is not just another e-learning platform; it’s the world’s first real-time 1:1
                          skill-building marketplace”</p>
                      </div>
                      <div className="slider_item_author"><img src="https://hardskill.exchange/wp-content/uploads/2024/10/Business-Insider.svg" alt="logo" />
                      </div>
                    </div>
                    <div className="slider-item slick-slide slick-cloned" data-slick-index={-2} aria-hidden="true" style={{ width: 587 }} tabIndex={-1}>
                      <div className="slider-item_text">
                        <p>“This groundbreaking platform facilitates direct interactions between operational experts,
                          revolutionizing the way professionals learn, exchange knowledge and monetize their expertise”
                        </p>
                      </div>
                      <div className="slider_item_author"><img src="https://hardskill.exchange/wp-content/uploads/2025/01/Venture-Beat-2.svg" alt="logo" />
                      </div>
                    </div>
                    <div className="slider-item slick-slide slick-cloned" data-slick-index={-1} aria-hidden="true" style={{ width: 587 }} tabIndex={-1}>
                      <div className="slider-item_text">
                        <p>“What truly sets HSE apart is its<br /> emphasis on individualized learning pathways, driven by
                          AI“</p>
                      </div>
                      <div className="slider_item_author"><img src="https://hardskill.exchange/wp-content/uploads/2024/08/logo-29.svg" alt="logo" /> </div>
                    </div>
                    <div className="slider-item slick-slide slick-active" data-slick-index={0} aria-hidden="false" style={{ width: 587 }} tabIndex={-1} role="option" aria-describedby="slick-slide00">
                      <div className="slider-item_text">
                        <p>“HSE is not just another e-learning platform; it’s the world’s first real-time 1:1
                          skill-building marketplace”</p>
                      </div>
                      <div className="slider_item_author"><img src="https://hardskill.exchange/wp-content/uploads/2024/10/Business-Insider.svg" alt="logo" />
                      </div>
                    </div>
                    <div className="slider-item slick-slide slick-current slick-active slick-center" data-slick-index={1} aria-hidden="false" style={{ width: 587 }} tabIndex={-1} role="option" aria-describedby="slick-slide01">
                      <div className="slider-item_text">
                        <p>“This groundbreaking platform facilitates direct interactions between operational experts,
                          revolutionizing the way professionals learn, exchange knowledge and monetize their expertise”
                        </p>
                      </div>
                      <div className="slider_item_author"><img src="https://hardskill.exchange/wp-content/uploads/2025/01/Venture-Beat-2.svg" alt="logo" />
                      </div>
                    </div>
                    <div className="slider-item slick-slide slick-active" data-slick-index={2} aria-hidden="false" style={{ width: 587 }} tabIndex={-1} role="option" aria-describedby="slick-slide02">
                      <div className="slider-item_text">
                        <p>“What truly sets HSE apart is its<br /> emphasis on individualized learning pathways, driven by
                          AI“</p>
                      </div>
                      <div className="slider_item_author"><img src="https://hardskill.exchange/wp-content/uploads/2024/08/logo-29.svg" alt="logo" /> </div>
                    </div>
                    <div className="slider-item slick-slide" data-slick-index={3} aria-hidden="true" style={{ width: 587 }} tabIndex={-1} role="option" aria-describedby="slick-slide03">
                      <div className="slider-item_text">
                        <p>“HSE is not just another e-learning platform; it’s the world’s first real-time 1:1
                          skill-building marketplace”</p>
                      </div>
                      <div className="slider_item_author"><img src="https://hardskill.exchange/wp-content/uploads/2024/10/Business-Insider.svg" alt="logo" />
                      </div>
                    </div>
                    <div className="slider-item slick-slide" data-slick-index={4} aria-hidden="true" style={{ width: 587 }} tabIndex={-1} role="option" aria-describedby="slick-slide04">
                      <div className="slider-item_text">
                        <p>“This groundbreaking platform facilitates direct interactions between operational experts,
                          revolutionizing the way professionals learn, exchange knowledge and monetize their expertise”
                        </p>
                      </div>
                      <div className="slider_item_author"><img src="https://hardskill.exchange/wp-content/uploads/2025/01/Venture-Beat-2.svg" alt="logo" />
                      </div>
                    </div>
                    <div className="slider-item slick-slide" data-slick-index={5} aria-hidden="true" style={{ width: 587 }} tabIndex={-1} role="option" aria-describedby="slick-slide05">
                      <div className="slider-item_text">
                        <p>“What truly sets HSE apart is its<br /> emphasis on individualized learning pathways, driven by
                          AI“</p>
                      </div>
                      <div className="slider_item_author"><img src="https://hardskill.exchange/wp-content/uploads/2024/08/logo-29.svg" alt="logo" /> </div>
                    </div>
                    <div className="slider-item slick-slide slick-cloned" data-slick-index={6} aria-hidden="true" style={{ width: 587 }} tabIndex={-1}>
                      <div className="slider-item_text">
                        <p>“HSE is not just another e-learning platform; it’s the world’s first real-time 1:1
                          skill-building marketplace”</p>
                      </div>
                      <div className="slider_item_author"><img src="https://hardskill.exchange/wp-content/uploads/2024/10/Business-Insider.svg" alt="logo" />
                      </div>
                    </div>
                    <div className="slider-item slick-slide slick-cloned" data-slick-index={7} aria-hidden="true" style={{ width: 587 }} tabIndex={-1}>
                      <div className="slider-item_text">
                        <p>“This groundbreaking platform facilitates direct interactions between operational experts,
                          revolutionizing the way professionals learn, exchange knowledge and monetize their expertise”
                        </p>
                      </div>
                      <div className="slider_item_author"><img src="https://hardskill.exchange/wp-content/uploads/2025/01/Venture-Beat-2.svg" alt="logo" />
                      </div>
                    </div>
                    <div className="slider-item slick-slide slick-cloned" data-slick-index={8} aria-hidden="true" style={{ width: 587 }} tabIndex={-1}>
                      <div className="slider-item_text">
                        <p>“What truly sets HSE apart is its<br /> emphasis on individualized learning pathways, driven by
                          AI“</p>
                      </div>
                      <div className="slider_item_author"><img src="https://hardskill.exchange/wp-content/uploads/2024/08/logo-29.svg" alt="logo" /> </div>
                    </div>
                    <div className="slider-item slick-slide slick-cloned" data-slick-index={9} aria-hidden="true" style={{ width: 587 }} tabIndex={-1}>
                      <div className="slider-item_text">
                        <p>“HSE is not just another e-learning platform; it’s the world’s first real-time 1:1
                          skill-building marketplace”</p>
                      </div>
                      <div className="slider_item_author"><img src="https://hardskill.exchange/wp-content/uploads/2024/10/Business-Insider.svg" alt="logo" />
                      </div>
                    </div>
                  </div>
                </div>
                <button className="slick-next slick-arrow" style={{}}>
                  <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.4584 7.78136H1.323C1.10772 7.78136 0.923692 7.70497 0.770915 7.55219C0.618137 7.39942 0.541748 7.21539 0.541748 7.00011C0.541748 6.78483 0.618137 6.60081 0.770915 6.44803C0.923692 6.29525 1.10772 6.21886 1.323 6.21886H10.4584L6.43758 2.19803C6.27786 2.03831 6.19973 1.85428 6.20321 1.64594C6.20668 1.43761 6.28828 1.25358 6.448 1.09386C6.60772 0.941083 6.79175 0.862958 7.00008 0.859486C7.20841 0.856014 7.39244 0.934139 7.55216 1.09386L12.9063 6.44803C12.9827 6.52442 13.04 6.60949 13.0782 6.70324C13.1164 6.79699 13.1355 6.89594 13.1355 7.00011C13.1355 7.10428 13.1164 7.20324 13.0782 7.29699C13.04 7.39074 12.9827 7.47581 12.9063 7.55219L7.55216 12.9064C7.39939 13.0591 7.21709 13.1355 7.00529 13.1355C6.79348 13.1355 6.60772 13.0591 6.448 12.9064C6.28828 12.7466 6.20841 12.5609 6.20841 12.3491C6.20841 12.1373 6.28828 11.9515 6.448 11.7918L10.4584 7.78136Z" fill="white" />
                  </svg>
                </button>
              </div>
            </div>
          </section>
          <section className="slack_section">
            <div className="slack_section_container">
              <img src="https://hardskill.exchange/wp-content/uploads/2024/12/slack-big-logo.svg" alt="image" />
              <h2>Where GTM Operators Trade What’s Working</h2>
              <div className="slack_section_text">
                <p>Inside the HSE Slack: 9,000+ leaders share real-time insight, hiring threads, and live experiments in
                  AI-native GTM.</p>
              </div>
              <div className="button_wrap">
                <a target="_blank" className="orange_gradient_button" href="https://join.slack.com/t/hardskillexchange/shared_invite/zt-33obl1dwy-35dwpTiVUh7VjUohtHXpVA" rel="nofollow noopener noreferrer">
                  <svg width={21} height={20} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.00002 5.83317C7.46585 5.83317 4.36585 5.83317 3.83335 5.83317C2.91252 5.83317 2.16669 6.579 2.16669 7.49984C2.16669 8.42067 2.91252 9.1665 3.83335 9.1665C4.36585 9.1665 7.46585 9.1665 8.00002 9.1665C8.92085 9.1665 9.66669 8.42067 9.66669 7.49984C9.66669 6.579 8.92085 5.83317 8.00002 5.83317ZM9.66669 3.33317C9.66669 3.8315 9.66669 4.99984 9.66669 4.99984C9.66669 4.99984 8.42252 4.99984 8.00002 4.99984C7.07919 4.99984 6.33335 4.254 6.33335 3.33317C6.33335 2.41234 7.07919 1.6665 8.00002 1.6665C8.92085 1.6665 9.66669 2.41234 9.66669 3.33317ZM6.33335 11.6665C6.33335 12.2007 6.33335 15.3007 6.33335 15.8332C6.33335 16.754 7.07919 17.4998 8.00002 17.4998C8.92085 17.4998 9.66669 16.754 9.66669 15.8332C9.66669 15.3007 9.66669 12.2007 9.66669 11.6665C9.66669 10.7457 8.92085 9.99984 8.00002 9.99984C7.07919 9.99984 6.33335 10.7457 6.33335 11.6665ZM3.83335 9.99984C4.33169 9.99984 5.50002 9.99984 5.50002 9.99984C5.50002 9.99984 5.50002 11.244 5.50002 11.6665C5.50002 12.5873 4.75419 13.3332 3.83335 13.3332C2.91252 13.3332 2.16669 12.5873 2.16669 11.6665C2.16669 10.7457 2.91252 9.99984 3.83335 9.99984ZM12.1667 13.3332C12.7009 13.3332 15.8009 13.3332 16.3334 13.3332C17.2542 13.3332 18 12.5873 18 11.6665C18 10.7457 17.2542 9.99984 16.3334 9.99984C15.8009 9.99984 12.7009 9.99984 12.1667 9.99984C11.2459 9.99984 10.5 10.7457 10.5 11.6665C10.5 12.5865 11.2459 13.3332 12.1667 13.3332ZM10.5 15.8332C10.5 15.3348 10.5 14.1665 10.5 14.1665C10.5 14.1665 11.7442 14.1665 12.1667 14.1665C13.0875 14.1665 13.8334 14.9123 13.8334 15.8332C13.8334 16.754 13.0875 17.4998 12.1667 17.4998C11.2459 17.4998 10.5 16.7532 10.5 15.8332ZM13.8334 7.49984C13.8334 6.96567 13.8334 3.86567 13.8334 3.33317C13.8334 2.41234 13.0875 1.6665 12.1667 1.6665C11.2459 1.6665 10.5 2.41234 10.5 3.33317C10.5 3.86567 10.5 6.96567 10.5 7.49984C10.5 8.42067 11.2459 9.1665 12.1667 9.1665C13.0867 9.1665 13.8334 8.41984 13.8334 7.49984ZM16.3334 9.1665C15.835 9.1665 14.6667 9.1665 14.6667 9.1665C14.6667 9.1665 14.6667 7.92234 14.6667 7.49984C14.6667 6.579 15.4125 5.83317 16.3334 5.83317C17.2542 5.83317 18 6.579 18 7.49984C18 8.42067 17.2534 9.1665 16.3334 9.1665Z" fill="white" />
                  </svg>
                  <span> Join now </span>
                </a>
              </div>
            </div>
          </section>
          <section className="last_section">
            <div className="last_section_content_block">
              <h2>Learn What Can’t Be Prompted</h2>
              <div className="last_section_content_block_text">Work 1:1 with operators building what AI can’t predict.</div>
              <a className="white_button" target="_blank" href="https://app.hardskill.exchange/" rel="nofollow noopener noreferrer">Start Now</a>
            </div>
            <video id="stock_market_section_background_video" className="stock_market_section_background_video" preload="none" playsInline autoPlay muted loop>
              <source src="https://hardskill.exchange/wp-content/uploads/2025/07/istock-1312471971.mp4" type="video/mp4" />
            </video>
          </section>
          {/* <button id="installAppBtn" style="display:block;opacity:0;">
Встановити застосунок
   </button> */}
          <div className="global_skill_modal_mob">
            <div className="modal_title" />
            <div className="modal_description" />
            <div className="modal_buttons_block">
              <a target="_blank" className="modal_button_to_app" href="#" rel="nofollow noopener noreferrer">Find experts with
                this skill</a>
              <a target="_blank" className="modal_button_to_page" href="#" rel="nofollow noopener noreferrer">Learn more about
                this skill</a>
            </div>
            <div className="modal_close_button">
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                <mask id="mask0_1309_3505" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x={0} y={0} width={16} height={16}>
                  <rect width={16} height={16} fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1309_3505)">
                  <path d="M8.00003 8.88291L4.75837 12.1246C4.63614 12.2468 4.48892 12.3065 4.3167 12.3037C4.14448 12.301 3.99725 12.2385 3.87503 12.1162C3.75837 11.994 3.70142 11.8482 3.7042 11.6787C3.70698 11.5093 3.7667 11.3662 3.88337 11.2496L7.1167 7.99957L3.88337 4.74957C3.7667 4.63291 3.70837 4.48985 3.70837 4.32041C3.70837 4.15096 3.7667 4.00513 3.88337 3.88291C4.00003 3.76068 4.14448 3.69818 4.3167 3.69541C4.48892 3.69263 4.63614 3.75235 4.75837 3.87457L8.00003 7.11624L11.2417 3.87457C11.3639 3.75235 11.5111 3.69263 11.6834 3.69541C11.8556 3.69818 12.0028 3.76068 12.125 3.88291C12.2417 4.00513 12.2986 4.15096 12.2959 4.32041C12.2931 4.48985 12.2334 4.63291 12.1167 4.74957L8.88337 7.99957L12.1167 11.2496C12.2334 11.3662 12.2917 11.5093 12.2917 11.6787C12.2917 11.8482 12.2334 11.994 12.1167 12.1162C12 12.2385 11.8556 12.301 11.6834 12.3037C11.5111 12.3065 11.3639 12.2468 11.2417 12.1246L8.00003 8.88291Z" fill="white" />
                </g>
              </svg>
              <span>Close</span>
            </div>
          </div>
          <div className="register-form form">
          </div>
          <div id="eventCheckPopup" className="register_popup_first_step">
            <div className="register_popup_first_step_title">Register or&nbsp;Sign&nbsp;in</div>
            <div className="register_popup_first_step_subtitle">Enter your email address to continue</div>
            <input type="email" id="eventEmailInput" placeholder="Enter Your Email" />
            <span id="checkEventBtn" className="register_popup_first_step_button_continue">continue</span>
            <button className="register_popup_first_step_button_cancel cancel-form">cancel</button>
            <div className="need_help_link">
              <p>Need help?</p>
            </div>
          </div>
          <div className="thank-you-popup coaching form">
            <p><span>Thank you</span><br /> Thanks for your recommendation!</p>
            <div className="button-block">
              <div className="cancel">
                <p><button className="cancel-form" type="button">Close</button>
                </p>
              </div>
            </div>
          </div>
          <div className="request-coaching-form form">
            <div className="wpcf7 js" id="wpcf7-f14864-p21522-o1" lang="en-US" dir="ltr" data-wpcf7-id={14864}>
              <div className="screen-reader-response">
                <p role="status" aria-live="polite" aria-atomic="true" />
                <ul />
              </div>
              <form action="/?nowprocket#wpcf7-f14864-p21522-o1" method="post" className="wpcf7-form init request_coaching cf7mls-no-scroll cf7mls-no-moving-animation" aria-label="Contact form" data-status="init">
                <div style={{ display: 'none' }}>
                  <input type="hidden" name="_wpcf7" defaultValue={14864} />
                  <input type="hidden" name="_wpcf7_version" defaultValue="6.0.6" />
                  <input type="hidden" name="_wpcf7_locale" defaultValue="en_US" />
                  <input type="hidden" name="_wpcf7_unit_tag" defaultValue="wpcf7-f14864-p21522-o1" />
                  <input type="hidden" name="_wpcf7_container_post" defaultValue={21522} />
                  <input type="hidden" name="_wpcf7_posted_data_hash" />
                  <input type="hidden" name="_wpcf7_recaptcha_response" />
                </div>
                <p><span>Request coaching</span>
                </p>
                <p>Get priority access if <span style={{ whiteSpace: 'nowrap' }} className="coach-name">[Coach name]</span> opens
                  availability. </p>
                <div role="form">
                  <div className="default-form type-2 request-coaching novalidate">
                    <div className="form-block">
                      <div className="hse-field_form sc_field_form">
                        <p><span className="wpcf7-form-control-wrap" data-name="your-email"><input size={40} maxLength={400} className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email" id="your-email" aria-required="true" aria-invalid="false" defaultValue="gacenkosergij160@gmail.com" type="email" name="your-email" autoComplete="both" /></span><br />
                          <label className="placeholder active">Company email address <sup style={{ color: '#FD2348' }}>*</sup></label>
                        </p>
                      </div>
                      <div className="name-block">
                        <div className="sc_field_form hse-field_form">
                          <p><span className="wpcf7-form-control-wrap" data-name="first_name"><input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" id="first_name" aria-required="true" aria-invalid="false" defaultValue="Serhii" type="text" name="first_name" /></span><br />
                            <label className="placeholder active">First name <sup style={{ color: '#FD2348' }}>*</sup></label>
                          </p>
                        </div>
                        <div className="sc_field_form hse-field_form">
                          <p><span className="wpcf7-form-control-wrap" data-name="last_name"><input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" id="last_name" aria-required="true" aria-invalid="false" defaultValue="Hatsenko" type="text" name="last_name" /></span><br />
                            <label className="placeholder active">Last name <sup style={{ color: '#FD2348' }}>*</sup></label>
                          </p>
                        </div>
                      </div>
                      <div className="sc_field_form hse-field_form">
                        <p><span className="wpcf7-form-control-wrap" data-name="job_title"><input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" id="job_title" aria-required="true" aria-invalid="false" type="text" name="job_title" /></span><br />
                          <label className="placeholder">Job title <sup style={{ color: '#FD2348' }}>*</sup></label>
                        </p>
                      </div>
                      <div className="sc_field_form hse-field_form">
                        <p><span className="wpcf7-form-control-wrap" data-name="hear_about_us"><textarea cols={40} rows={10} maxLength={2000} className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required" id="hear_about_us" aria-required="true" aria-invalid="false" name="hear_about_us" defaultValue={""} /></span><br />
                          <label className="placeholder placeholder_textarea">Top skill you’d like to learn <sup style={{ color: '#FD2348' }}>*</sup></label>
                        </p>
                      </div>
                      <div className="acceptance_fields">
                        <div className="acceptance_field_policy">
                          <p><span className="wpcf7-form-control-wrap" data-name="terms-acceptance"><span className="wpcf7-form-control wpcf7-acceptance"><span className="wpcf7-list-item"><input type="checkbox" name="terms-acceptance" defaultValue={1} aria-invalid="false" /></span></span></span>
                          </p>
                          <div className="acceptance_field_policy_text">
                            <p>I agree to the HSE’s <a href="https://hardskill.exchange/privacy-policy/" target="_blank" rel="nofollow noopener noreferrer">Privacy Policy</a> and <a href="https://hardskill.exchange/terms-of-use/" target="_blank" rel="nofollow noopener noreferrer">Terms of Use</a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="button-block">
                        <div className="submit-block">
                          <p><input className="wpcf7-form-control wpcf7-submit has-spinner" type="submit" defaultValue="Continue" disabled /><span className="wpcf7-spinner" />
                          </p>
                        </div>
                        <div className="cancel">
                          <p><button className="cancel-form" type="button">Cancel</button>
                          </p>
                        </div>
                      </div>
                      <div className="hidden sc_hide hyp-hide">
                        <p><span className="wpcf7-form-control-wrap" data-name="LeadSource"><input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text hidden" aria-invalid="false" defaultValue="HSE" type="text" name="LeadSource" /></span><br />
                          <span className="wpcf7-form-control-wrap" data-name="utm_source"><input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text hidden" aria-invalid="false" defaultValue="empty" type="text" name="utm_source" /></span><br />
                          <span className="wpcf7-form-control-wrap" data-name="utm_medium"><input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text hidden" aria-invalid="false" defaultValue="empty" type="text" name="utm_medium" /></span><br />
                          <span className="wpcf7-form-control-wrap" data-name="utm_term"><input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text hidden" aria-invalid="false" defaultValue="empty" type="text" name="utm_term" /></span><br />
                          <span className="wpcf7-form-control-wrap" data-name="utm_campaign"><input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text hidden" aria-invalid="false" defaultValue="empty" type="text" name="utm_campaign" /></span><br />
                          <span className="wpcf7-form-control-wrap" data-name="utm_content"><input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text hidden" aria-invalid="false" defaultValue="empty" type="text" name="utm_content" /></span><br />
                          <span className="wpcf7-form-control-wrap" data-name="referring_url"><input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text hidden" id="referringURL" aria-invalid="false" type="text" name="referring_url" /></span><br />
                          <span className="wpcf7-form-control-wrap" data-name="base_url"><input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text hidden" aria-invalid="false" type="text" name="base_url" /></span><br />
                          <span className="wpcf7-form-control-wrap" data-name="client_id"><input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text hidden" aria-invalid="false" defaultValue="empty" type="text" name="client_id" /></span><br />
                          <span className="wpcf7-form-control-wrap" data-name="coach_name"><input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text" id="coach-name" aria-invalid="false" defaultValue="empty" type="text" name="coach_name" /></span><br />
                          <span className="wpcf7-form-control-wrap" data-name="tags"><input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text hidden" aria-invalid="false" defaultValue="HSE, HSE-REQUEST-COACHING-FORM, cxo-Guy-Kawasaki" type="text" name="tags" /></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wpcf7-response-output" aria-hidden="true" />
              </form>
            </div>
          </div>

          <div className="bg-popup" />
          <div className="show_video_popup" />
        </main>
        <footer>
          <div className="footer_in_container">
            <div className="footer_top_content_container">
              <div className="social_container">
                <div className="logo_block">
                  <div className="footer_logo">
                    <a href="/">
                      <svg width={105} height={20} viewBox="0 0 105 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.9984 0.437158V19.5628H12.5004V12.5137H6.498V19.5628H0V0.437158H6.498V7.21311H12.5004V0.437158H18.9984Z" fill="white" />
                        <path d="M29.3156 20C27.7187 20 26.1584 19.827 24.6349 19.4809C23.1297 19.1166 21.8907 18.6339 20.9178 18.0328L23.0104 13.3333C23.9282 13.8616 24.9561 14.2896 26.0942 14.6175C27.2322 14.9271 28.3244 15.082 29.3707 15.082C30.2701 15.082 30.9126 15 31.2981 14.8361C31.6835 14.6539 31.8763 14.3898 31.8763 14.0437C31.8763 13.643 31.6193 13.3424 31.1053 13.1421C30.6097 12.9417 29.7837 12.7231 28.6273 12.4863C27.1404 12.1767 25.9014 11.8488 24.9102 11.5027C23.919 11.1384 23.0563 10.5556 22.322 9.7541C21.5878 8.93443 21.2207 7.83242 21.2207 6.44809C21.2207 5.2459 21.5602 4.15301 22.2394 3.1694C22.9186 2.18579 23.9282 1.41166 25.2681 0.846994C26.6265 0.282331 28.2693 0 30.1967 0C31.5183 0 32.8124 0.145719 34.079 0.437158C35.3639 0.710381 36.4928 1.12022 37.4657 1.66667L35.5108 6.3388C33.6201 5.39162 31.8304 4.91803 30.1416 4.91803C28.4713 4.91803 27.6361 5.31876 27.6361 6.12022C27.6361 6.50273 27.8839 6.79417 28.3795 6.99454C28.8751 7.17668 29.6919 7.37705 30.83 7.59563C32.2985 7.86885 33.5375 8.18761 34.5471 8.55191C35.5566 8.898 36.4286 9.47177 37.1628 10.2732C37.9154 11.0747 38.2917 12.1676 38.2917 13.5519C38.2917 14.7541 37.9521 15.847 37.2729 16.8306C36.5938 17.796 35.575 18.5701 34.2167 19.153C32.8767 19.7177 31.243 20 29.3156 20Z" fill="white" />
                        <path d="M56.25 14.6995V19.5628H40.2253V0.437158H55.8921V5.30055H46.6131V7.54098H54.7632V12.1858H46.6131V14.6995H56.25Z" fill="white" />
                        <path d="M66.6415 0V5.15464H64.908V3.25479H63.3067V5.15464H61.5732V0H63.3067V1.82622H64.908V0H66.6415Z" fill="white" />
                        <path d="M70.9806 4.25626H69.0267L68.6815 5.15464H66.9185L69.1663 0H70.8704L73.1181 5.15464H71.3258L70.9806 4.25626ZM70.5031 3.00442L70.0036 1.7084L69.5041 3.00442H70.5031Z" fill="white" />
                        <path d="M75.5984 3.85862H75.1283V5.15464H73.3948V0H75.8702C76.3452 0 76.759 0.0785469 77.1116 0.235641C77.4641 0.392734 77.7359 0.618557 77.9269 0.913108C78.1179 1.20766 78.2134 1.5513 78.2134 1.94404C78.2134 2.31222 78.1301 2.63378 77.9636 2.90869C77.7971 3.1836 77.5572 3.40206 77.2438 3.56407L78.3235 5.15464H76.4725L75.5984 3.85862ZM76.4652 1.94404C76.4652 1.75258 76.4064 1.6053 76.2889 1.50221C76.1713 1.39421 75.995 1.34021 75.76 1.34021H75.1283V2.54786H75.76C75.995 2.54786 76.1713 2.49632 76.2889 2.39323C76.4064 2.28522 76.4652 2.13549 76.4652 1.94404Z" fill="white" />
                        <path d="M78.868 0H81.4021C81.9751 0 82.4795 0.105547 82.9153 0.316642C83.356 0.522828 83.6964 0.819833 83.9363 1.20766C84.1812 1.59548 84.3036 2.05204 84.3036 2.57732C84.3036 3.1026 84.1812 3.55916 83.9363 3.94698C83.6964 4.33481 83.356 4.63427 82.9153 4.84536C82.4795 5.05155 81.9751 5.15464 81.4021 5.15464H78.868V0ZM81.3287 3.79971C81.7009 3.79971 81.9971 3.69416 82.2175 3.48306C82.4428 3.26706 82.5554 2.96514 82.5554 2.57732C82.5554 2.18949 82.4428 1.89003 82.2175 1.67894C81.9971 1.46294 81.7009 1.35493 81.3287 1.35493H80.6015V3.79971H81.3287Z" fill="white" />
                        <path d="M63.4904 12.6362C63.0643 12.6362 62.6481 12.5896 62.2416 12.4963C61.8401 12.3981 61.5095 12.268 61.25 12.106L61.8083 10.8395C62.0531 10.9818 62.3273 11.0972 62.6309 11.1856C62.9346 11.269 63.2259 11.3108 63.5051 11.3108C63.745 11.3108 63.9164 11.2887 64.0192 11.2445C64.1221 11.1954 64.1735 11.1242 64.1735 11.0309C64.1735 10.9229 64.1049 10.8419 63.9678 10.7879C63.8356 10.7339 63.6152 10.675 63.3067 10.6112C62.9101 10.5277 62.5795 10.4394 62.3151 10.3461C62.0507 10.2479 61.8205 10.0908 61.6246 9.87482C61.4287 9.6539 61.3308 9.3569 61.3308 8.9838C61.3308 8.65979 61.4214 8.36524 61.6026 8.10015C61.7838 7.83505 62.0531 7.62641 62.4106 7.47423C62.7729 7.32204 63.2112 7.24595 63.7254 7.24595C64.078 7.24595 64.4232 7.28522 64.7611 7.36377C65.1039 7.43741 65.4051 7.54786 65.6646 7.69514L65.1431 8.95434C64.6387 8.69907 64.1612 8.57143 63.7107 8.57143C63.2651 8.57143 63.0423 8.67943 63.0423 8.89544C63.0423 8.99853 63.1084 9.07707 63.2406 9.13107C63.3728 9.18017 63.5907 9.23417 63.8944 9.29308C64.2861 9.36672 64.6167 9.45263 64.886 9.55081C65.1553 9.64409 65.3879 9.79872 65.5838 10.0147C65.7846 10.2307 65.885 10.5253 65.885 10.8984C65.885 11.2224 65.7944 11.5169 65.6132 11.782C65.432 12.0422 65.1602 12.2509 64.7978 12.408C64.4404 12.5601 64.0045 12.6362 63.4904 12.6362Z" fill="white" />
                        <path d="M68.4943 10.81L68.105 11.2445V12.5184H66.4008V7.36377H68.105V9.23417L69.7944 7.36377H71.6822L69.6255 9.63181L71.785 12.5184H69.7797L68.4943 10.81Z" fill="white" />
                        <path d="M72.0175 7.36377H73.751V12.5184H72.0175V7.36377Z" fill="white" />
                        <path d="M74.5855 7.36377H76.3191V11.1708H78.6402V12.5184H74.5855V7.36377Z" fill="white" />
                        <path d="M79.119 7.36377H80.8526V11.1708H83.1737V12.5184H79.119V7.36377Z" fill="white" />
                        <path d="M65.8482 18.5714V19.8822H61.5732V14.7275H65.7528V16.0383H63.2773V16.6421H65.4516V17.894H63.2773V18.5714H65.8482Z" fill="white" />
                        <path d="M69.7337 19.8822L68.845 18.5052L67.9782 19.8822H66.0023L67.8607 17.2828L66.0684 14.7275H68.0149L68.889 16.0236L69.7411 14.7275H71.6068L69.8219 17.2165L71.717 19.8822H69.7337Z" fill="white" />
                        <path d="M74.5474 20C74.0039 20 73.5142 19.8871 73.0783 19.6613C72.6425 19.4305 72.2997 19.1114 72.05 18.704C71.8051 18.2916 71.6827 17.8252 71.6827 17.3049C71.6827 16.7845 71.8051 16.3206 72.05 15.9131C72.2997 15.5007 72.6425 15.1816 73.0783 14.9558C73.5142 14.7251 74.0039 14.6097 74.5474 14.6097C75.0469 14.6097 75.4925 14.6981 75.8843 14.8748C76.2761 15.0515 76.5993 15.3068 76.8539 15.6406L75.7594 16.62C75.4411 16.2175 75.0665 16.0162 74.6356 16.0162C74.2732 16.0162 73.9818 16.134 73.7615 16.3697C73.5411 16.6004 73.4309 16.9121 73.4309 17.3049C73.4309 17.6976 73.5411 18.0118 73.7615 18.2474C73.9818 18.4782 74.2732 18.5935 74.6356 18.5935C75.0665 18.5935 75.4411 18.3922 75.7594 17.9897L76.8539 18.9691C76.5993 19.3029 76.2761 19.5582 75.8843 19.7349C75.4925 19.9116 75.0469 20 74.5474 20Z" fill="white" />
                        <path d="M82.4228 14.7275V19.8822H80.6892V17.9823H79.0879V19.8822H77.3544V14.7275H79.0879V16.5538H80.6892V14.7275H82.4228Z" fill="white" />
                        <path d="M86.7618 18.9838H84.8079L84.4627 19.8822H82.6998L84.9475 14.7275H86.6516L88.8993 19.8822H87.107L86.7618 18.9838ZM86.2843 17.732L85.7849 16.4359L85.2854 17.732H86.2843Z" fill="white" />
                        <path d="M94.2443 14.7275V19.8822H92.8193L90.8654 17.5405V19.8822H89.176V14.7275H90.601L92.5549 17.0692V14.7275H94.2443Z" fill="white" />
                        <path d="M98.4805 17.1649H99.9863V19.3446C99.6827 19.5557 99.3301 19.7177 98.9286 19.8306C98.527 19.9435 98.1328 20 97.746 20C97.1975 20 96.7054 19.8871 96.2695 19.6613C95.8337 19.4305 95.4909 19.1114 95.2412 18.704C94.9963 18.2916 94.8739 17.8252 94.8739 17.3049C94.8739 16.7845 94.9963 16.3206 95.2412 15.9131C95.4909 15.5007 95.8362 15.1816 96.2769 14.9558C96.7225 14.7251 97.2244 14.6097 97.7827 14.6097C98.2871 14.6097 98.7376 14.6956 99.1343 14.8675C99.5358 15.0344 99.8688 15.2798 100.133 15.6038L99.0241 16.5832C98.7009 16.2052 98.3165 16.0162 97.8708 16.0162C97.4889 16.0162 97.1853 16.1316 96.96 16.3623C96.7348 16.593 96.6221 16.9072 96.6221 17.3049C96.6221 17.6927 96.7323 18.0044 96.9527 18.2401C97.1779 18.4757 97.4766 18.5935 97.8488 18.5935C98.0692 18.5935 98.2797 18.5518 98.4805 18.4683V17.1649Z" fill="white" />
                        <path d="M105 18.5714V19.8822H100.725V14.7275H104.905V16.0383H102.429V16.6421H104.603V17.894H102.429V18.5714H105Z" fill="white" />
                      </svg>
                    </a>
                  </div>
                  <p>Upskilling for GTM leaders and teams in the Age of AI</p>
                </div>
                <div className="sociale_icons_block">
                  <div className="social_icon">
                    <a aria-label="Twitter" href="https://twitter.com/hardskillx" target="_blank" rel="nofollow noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                        <path d="M8 0C8 0 12.2545 -3.12626e-05 13.8145 0.417969C14.6741 0.648039 15.352 1.32588 15.582 2.18555C16 3.74555 16 8 16 8C16 8 16 12.2545 15.582 13.8145C15.352 14.6741 14.6751 15.352 13.8145 15.582C12.2545 16 8 16 8 16C8 16 3.74555 16 2.18555 15.582C1.32588 15.352 0.648039 14.6741 0.417969 13.8145C-3.12626e-05 12.2545 0 8 0 8C0 8 -3.11674e-05 3.74555 0.417969 2.18555C0.648039 1.32588 1.32588 0.648039 2.18555 0.417969C3.74555 -3.11656e-05 8 0 8 0ZM6.68848 8.5625L3.36621 12.4443H4.55078L7.21875 9.31934L9.40332 12.4443H12.8174L9.0957 7.12012L12.1377 3.55566H10.9727L8.56934 6.36426L6.60742 3.55566H3.18457L6.68848 8.5625ZM11.1689 11.5664H9.83789L4.8418 4.43359H6.16406L11.1689 11.5664Z" fill="white" fillOpacity="0.64" />
                      </svg>
                    </a>
                  </div>
                  <div className="social_icon">
                    <a aria-label="Linkedin" href="https://www.linkedin.com/company/hard-skill-exchange/" target="_blank" rel="nofollow noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                        <path d="M8 0C8 0 12.2545 -3.12626e-05 13.8145 0.417969C14.6741 0.648039 15.352 1.32588 15.582 2.18555C16 3.74555 16 8 16 8C16 8 16 12.2545 15.582 13.8145C15.352 14.6741 14.6751 15.352 13.8145 15.582C12.2545 16 8 16 8 16C8 16 3.74555 16 2.18555 15.582C1.32588 15.352 0.648039 14.6741 0.417969 13.8145C-3.12626e-05 12.2545 0 8 0 8C0 8 -3.11674e-05 3.74555 0.417969 2.18555C0.648039 1.32588 1.32588 0.648039 2.18555 0.417969C3.74555 -3.11656e-05 8 0 8 0ZM2.91113 6.52539V12.748H5.1543V6.52539H2.91113ZM7.00488 6.52539V12.748H9.24707C9.24707 12.748 9.24707 9.49157 9.24707 9.34668C9.24725 8.33501 9.9703 8.18958 10.1875 8.18945C10.4044 8.18945 10.9832 8.40656 10.9834 9.34668V12.748H13.1543V9.34668C13.1542 7.39406 12.2855 6.52539 11.2002 6.52539C10.1149 6.5254 9.53596 6.88787 9.24707 7.39453V6.52539H7.00488ZM4.06836 3.25195C3.30687 3.25208 2.84974 3.70879 2.84961 4.31836C2.84961 4.92814 3.30783 5.38574 3.99316 5.38574C4.75491 5.38572 5.21191 4.92812 5.21191 4.31836C5.21178 3.70871 4.75359 3.25195 4.06836 3.25195Z" fill="white" fillOpacity="0.64" />
                      </svg>
                    </a>
                  </div>
                  <div className="social_icon">
                    <a aria-label="Youtube" href="https://www.youtube.com/@HardSkillExchange" target="_blank" rel="nofollow noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                        <path d="M15.582 2.186C15.352 1.326 14.674 0.648 13.814 0.418C12.254 2.08616e-07 8 0 8 0C8 0 3.746 2.08616e-07 2.186 0.418C1.326 0.648 0.648 1.326 0.418 2.186C-2.98023e-08 3.746 0 8 0 8C0 8 -2.98023e-08 12.254 0.418 13.814C0.648 14.674 1.326 15.352 2.186 15.582C3.746 16 8 16 8 16C8 16 12.254 16 13.814 15.582C14.675 15.352 15.352 14.674 15.582 13.814C16 12.254 16 8 16 8C16 8 16 3.746 15.582 2.186ZM6 10.598V5.402C6 5.017 6.417 4.777 6.75 4.969L11.25 7.567C11.583 7.759 11.583 8.241 11.25 8.433L6.75 11.031C6.417 11.224 6 10.983 6 10.598Z" fill="white" fillOpacity="0.64" />
                      </svg>
                    </a>
                  </div>
                </div>
                <a href="#header" className="footer_button">
                  <svg xmlns="http://www.w3.org/2000/svg" width={10} height={11} viewBox="0 0 10 11" fill="none">
                    <path d="M4.37548 2.23346L1.15881 5.45013C1.03103 5.57791 0.883813 5.64041 0.717146 5.63763C0.550479 5.63485 0.403257 5.56958 0.275479 5.4418C0.153257 5.31402 0.0907571 5.1668 0.0879793 5.00013C0.0852015 4.83346 0.147702 4.68624 0.275479 4.55846L4.55881 0.27513C4.61992 0.214019 4.68798 0.168186 4.76298 0.13763C4.83798 0.107075 4.91715 0.0917969 5.00048 0.0917969C5.08381 0.0917969 5.16298 0.107075 5.23798 0.13763C5.31298 0.168186 5.38103 0.214019 5.44215 0.27513L9.72548 4.55846C9.8477 4.68069 9.90881 4.82652 9.90881 4.99596C9.90881 5.16541 9.8477 5.31402 9.72548 5.4418C9.5977 5.56958 9.44909 5.63346 9.27965 5.63346C9.1102 5.63346 8.96159 5.56958 8.83381 5.4418L5.62548 2.23346V9.5418C5.62548 9.71402 5.56437 9.86124 5.44215 9.98346C5.31992 10.1057 5.1727 10.1668 5.00048 10.1668C4.82826 10.1668 4.68104 10.1057 4.55881 9.98346C4.43659 9.86124 4.37548 9.71402 4.37548 9.5418V2.23346Z" fill="white" fillOpacity="0.64" />
                  </svg>
                  <span data-text="Back to top">Back to top</span>
                </a>
              </div>
              <div className="menus_container">
                <div className="menu_item_wrapper">
                  <div className="menu_item_arrow_down">
                    <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.00012 5.40625C4.89595 5.40625 4.79699 5.38715 4.70324 5.34896C4.60949 5.31076 4.52442 5.25347 4.44803 5.17708L0.677199 1.40625C0.524421 1.25347 0.449769 1.06944 0.453241 0.854167C0.456713 0.638889 0.534838 0.458333 0.687616 0.3125C0.840393 0.166667 1.02269 0.09375 1.23449 0.09375C1.4463 0.09375 1.62512 0.166667 1.77095 0.3125L5.00012 3.54167L8.22928 0.3125C8.37512 0.166667 8.55393 0.09375 8.76574 0.09375C8.97755 0.09375 9.15984 0.166667 9.31261 0.3125C9.46539 0.458333 9.54352 0.638889 9.54699 0.854167C9.55046 1.06944 9.47581 1.25347 9.32303 1.40625L5.5522 5.17708C5.47581 5.25347 5.39074 5.31076 5.29699 5.34896C5.20324 5.38715 5.10428 5.40625 5.00012 5.40625Z" fill="white" fillOpacity="0.48" />
                    </svg>
                  </div>
                  <p className="footer-menu-title">Marketplace</p>
                  <div className="menu-footer-menu-marketplace-container">
                    <ul className="custom_menu_shortcode">
                      <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://app.hardskill.exchange/" className="main_menu_item_wrapper">
                        <div><span className="main_menu_item">For Individuals</span><svg className="menu_item_arrow" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 14 14" fill="none">
                          <g>
                            <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFF" />
                          </g>
                        </svg></div>
                        <div className="menu-item-description">Gain pivotal skills from leading practitioners in leading
                          companies </div>
                      </a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://hardskill.exchange/hse-for-teams/" className="main_menu_item_wrapper">
                        <div><span className="main_menu_item">For teams</span><svg className="menu_item_arrow" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 14 14" fill="none">
                          <g>
                            <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFF" />
                          </g>
                        </svg></div>
                        <div className="menu-item-description">Accelerate your team’s revenue growth by leveraging our
                          curated 1:1 coaching cohorts </div>
                      </a></li>
                    </ul>
                  </div>
                </div>
                <div className="menu_item_wrapper">
                  <div className="menu_item_arrow_down">
                    <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.00012 5.40625C4.89595 5.40625 4.79699 5.38715 4.70324 5.34896C4.60949 5.31076 4.52442 5.25347 4.44803 5.17708L0.677199 1.40625C0.524421 1.25347 0.449769 1.06944 0.453241 0.854167C0.456713 0.638889 0.534838 0.458333 0.687616 0.3125C0.840393 0.166667 1.02269 0.09375 1.23449 0.09375C1.4463 0.09375 1.62512 0.166667 1.77095 0.3125L5.00012 3.54167L8.22928 0.3125C8.37512 0.166667 8.55393 0.09375 8.76574 0.09375C8.97755 0.09375 9.15984 0.166667 9.31261 0.3125C9.46539 0.458333 9.54352 0.638889 9.54699 0.854167C9.55046 1.06944 9.47581 1.25347 9.32303 1.40625L5.5522 5.17708C5.47581 5.25347 5.39074 5.31076 5.29699 5.34896C5.20324 5.38715 5.10428 5.40625 5.00012 5.40625Z" fill="white" fillOpacity="0.48" />
                    </svg>
                  </div>
                  <p className="footer-menu-title">Resources</p>
                  <div className="menu-footer-menu-resources-container">
                    <ul className="custom_menu_shortcode">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://hardskill.exchange/resources/blog/" className="main_menu_item_wrapper">
                        <div><span className="main_menu_item">Blog</span><svg className="menu_item_arrow" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 14 14" fill="none">
                          <g>
                            <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFF" />
                          </g>
                        </svg></div>
                        <div className="menu-item-description">Tactics and strategies on building up your hard skills.
                        </div>
                      </a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="/resources/whitepapers/" className="main_menu_item_wrapper">
                        <div><span className="main_menu_item">Reports &amp; guides</span><svg className="menu_item_arrow" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 14 14" fill="none">
                          <g>
                            <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFF" />
                          </g>
                        </svg></div>
                      </a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://hardskill.exchange/gtmmag/" className="main_menu_item_wrapper">
                        <div><span className="main_menu_item">GTM mag</span><svg className="menu_item_arrow" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 14 14" fill="none">
                          <g>
                            <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFF" />
                          </g>
                        </svg></div>
                        <div className="menu-item-description">Hard-hitting articles for CXOs by CXOs.</div>
                      </a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="/test-your-gtm/" className="main_menu_item_wrapper">
                        <div><span className="main_menu_item">GTM Assessment</span><svg className="menu_item_arrow" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 14 14" fill="none">
                          <g>
                            <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFF" />
                          </g>
                        </svg></div>
                      </a></li>
                    </ul>
                  </div>
                </div>
                <div className="menu_item_wrapper">
                  <div className="menu_item_arrow_down">
                    <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.00012 5.40625C4.89595 5.40625 4.79699 5.38715 4.70324 5.34896C4.60949 5.31076 4.52442 5.25347 4.44803 5.17708L0.677199 1.40625C0.524421 1.25347 0.449769 1.06944 0.453241 0.854167C0.456713 0.638889 0.534838 0.458333 0.687616 0.3125C0.840393 0.166667 1.02269 0.09375 1.23449 0.09375C1.4463 0.09375 1.62512 0.166667 1.77095 0.3125L5.00012 3.54167L8.22928 0.3125C8.37512 0.166667 8.55393 0.09375 8.76574 0.09375C8.97755 0.09375 9.15984 0.166667 9.31261 0.3125C9.46539 0.458333 9.54352 0.638889 9.54699 0.854167C9.55046 1.06944 9.47581 1.25347 9.32303 1.40625L5.5522 5.17708C5.47581 5.25347 5.39074 5.31076 5.29699 5.34896C5.20324 5.38715 5.10428 5.40625 5.00012 5.40625Z" fill="white" fillOpacity="0.48" />
                    </svg>
                  </div>
                  <p className="footer-menu-title">Community</p>
                  <div className="menu-menu-community-container">
                    <ul className="custom_menu_shortcode">
                      <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="/resources/cxo-games/" className="main_menu_item_wrapper">
                        <div><span className="main_menu_item">CXO Games</span><svg className="menu_item_arrow" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 14 14" fill="none">
                          <g>
                            <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFF" />
                          </g>
                        </svg></div>
                        <div className="menu-item-description">Virtual event series where leading CXOs debate the most
                          compelling topics in the game. </div>
                      </a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="/resources/ama/" className="main_menu_item_wrapper">
                        <div><span className="main_menu_item">AMAs</span><svg className="menu_item_arrow" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 14 14" fill="none">
                          <g>
                            <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFF" />
                          </g>
                        </svg></div>
                        <div className="menu-item-description">Rapid "Ask Me Anything" format, showcasing top HSE coach
                          practitioners sharing real-world expertise.</div>
                      </a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="https://join.slack.com/t/hardskillexchange/shared_invite/zt-33obl1dwy-35dwpTiVUh7VjUohtHXpVA" className="main_menu_item_wrapper">
                        <div><span className="main_menu_item">Slack</span><svg className="menu_item_arrow" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 14 14" fill="none">
                          <g>
                            <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFF" />
                          </g>
                        </svg></div>
                      </a></li>
                    </ul>
                  </div>
                </div>
                <div className="menu_item_wrapper">
                  <div className="menu_item_arrow_down">
                    <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.00012 5.40625C4.89595 5.40625 4.79699 5.38715 4.70324 5.34896C4.60949 5.31076 4.52442 5.25347 4.44803 5.17708L0.677199 1.40625C0.524421 1.25347 0.449769 1.06944 0.453241 0.854167C0.456713 0.638889 0.534838 0.458333 0.687616 0.3125C0.840393 0.166667 1.02269 0.09375 1.23449 0.09375C1.4463 0.09375 1.62512 0.166667 1.77095 0.3125L5.00012 3.54167L8.22928 0.3125C8.37512 0.166667 8.55393 0.09375 8.76574 0.09375C8.97755 0.09375 9.15984 0.166667 9.31261 0.3125C9.46539 0.458333 9.54352 0.638889 9.54699 0.854167C9.55046 1.06944 9.47581 1.25347 9.32303 1.40625L5.5522 5.17708C5.47581 5.25347 5.39074 5.31076 5.29699 5.34896C5.20324 5.38715 5.10428 5.40625 5.00012 5.40625Z" fill="white" fillOpacity="0.48" />
                    </svg>
                  </div>
                  <p className="footer-menu-title">AI Practice Sessions</p>
                  <div className="menu-footer-menu-ai-practice-sessions-container">
                    <ul className="custom_menu_shortcode">
                      <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="/ai-practice-sessions/agentic-scaling/" className="main_menu_item_wrapper">
                        <div className="menu_item_date">Jun 2025</div>
                        <div><span className="main_menu_item">Agentic Scaling</span><svg className="menu_item_arrow" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 14 14" fill="none">
                          <g>
                            <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFF" />
                          </g>
                        </svg></div>
                        <div className="menu-item-description">Real-World AI Applications for De-risking and Resolving
                          the Innovator’s Dilemma in GTM</div>
                      </a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="/ai-practice-sessions/diamond-grade-marketing-2025/" className="main_menu_item_wrapper">
                        <div className="menu_item_date">Mar 2025</div>
                        <div><span className="main_menu_item">Diamond-Grade Marketing</span><svg className="menu_item_arrow" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 14 14" fill="none">
                          <g>
                            <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFF" />
                          </g>
                        </svg></div>
                        <div className="menu-item-description">AI Search Experience Optimization, Power-Law User
                          Acquisition, Agentic Demo Automation, Causal GTM, AI MarOps, and more.</div>
                      </a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="/ai-practice-sessions/prospecting-methods-2025/" className="main_menu_item_wrapper">
                        <div className="menu_item_date">Dec 2024</div>
                        <div><span className="main_menu_item">Prospecting Methods</span><svg className="menu_item_arrow" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 14 14" fill="none">
                          <g>
                            <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFF" />
                          </g>
                        </svg></div>
                        <div className="menu-item-description">Hyper-Personalized Outreach, Predictive Targeting,
                          Ecosystem-Led Growth, Signal-Based Prospecting, AI-Powered SDRs, and more.</div>
                      </a></li>
                    </ul>
                  </div>
                </div>
                <div className="menu_item_wrapper">
                  <div className="menu_item_arrow_down">
                    <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.00012 5.40625C4.89595 5.40625 4.79699 5.38715 4.70324 5.34896C4.60949 5.31076 4.52442 5.25347 4.44803 5.17708L0.677199 1.40625C0.524421 1.25347 0.449769 1.06944 0.453241 0.854167C0.456713 0.638889 0.534838 0.458333 0.687616 0.3125C0.840393 0.166667 1.02269 0.09375 1.23449 0.09375C1.4463 0.09375 1.62512 0.166667 1.77095 0.3125L5.00012 3.54167L8.22928 0.3125C8.37512 0.166667 8.55393 0.09375 8.76574 0.09375C8.97755 0.09375 9.15984 0.166667 9.31261 0.3125C9.46539 0.458333 9.54352 0.638889 9.54699 0.854167C9.55046 1.06944 9.47581 1.25347 9.32303 1.40625L5.5522 5.17708C5.47581 5.25347 5.39074 5.31076 5.29699 5.34896C5.20324 5.38715 5.10428 5.40625 5.00012 5.40625Z" fill="white" fillOpacity="0.48" />
                    </svg>
                  </div>
                  <p className="footer-menu-title">AI Summits</p>
                  <div className="menu-footer-menu-ai-summits-container">
                    <ul className="custom_menu_shortcode">
                      <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="/summit/agentic-distribution/" className="main_menu_item_wrapper main_menu_item_wrapper_primary">
                        <div className="menu_item_date">Sep 16–18, 2025</div>
                        <div><span className="main_menu_item">Agentic Distribution Summit</span><svg className="menu_item_arrow" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 14 14" fill="none">
                          <g>
                            <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFF" />
                          </g>
                        </svg></div>
                        <div className="menu-item-description">The Machines Are the Channel Now</div>
                      </a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="/summit/agentic-ai-summit/" className="main_menu_item_wrapper">
                        <div className="menu_item_date">May 2025</div>
                        <div><span className="main_menu_item">Agentic AI Summit</span><svg className="menu_item_arrow" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 14 14" fill="none">
                          <g>
                            <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFF" />
                          </g>
                        </svg></div>
                        <div className="menu-item-description">The Dawn of AI-native GTM</div>
                      </a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="/summit/ai-led-growth/" className="main_menu_item_wrapper">
                        <div className="menu_item_date">Feb 2025</div>
                        <div><span className="main_menu_item">AI-led Growth (AI-LG) Summit</span><svg className="menu_item_arrow" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 14 14" fill="none">
                          <g>
                            <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFF" />
                          </g>
                        </svg></div>
                        <div className="menu-item-description">Orchestrating the Future of GTM Motions</div>
                      </a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="/summit/forecast-25/" className="main_menu_item_wrapper">
                        <div className="menu_item_date">Nov 2024</div>
                        <div><span className="main_menu_item">Forecast’25 Summit</span><svg className="menu_item_arrow" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 14 14" fill="none">
                          <g>
                            <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFF" />
                          </g>
                        </svg></div>
                        <div className="menu-item-description">B2B Minds and AI Merge: Reprogramming the Future of
                          Revenue in 2025</div>
                      </a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="/summit/ai-summit/" className="main_menu_item_wrapper">
                        <div className="menu_item_date">Sep 2024</div>
                        <div><span className="main_menu_item">B2B’s First AI Summit</span><svg className="menu_item_arrow" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 14 14" fill="none">
                          <g>
                            <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFF" />
                          </g>
                        </svg></div>
                        <div className="menu-item-description">Learn How AI Helps Revenue Teams Improve Every Step of the
                          Funnel</div>
                      </a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer_down_container">
              <div className="down_container_copyright">
                <div className="copyright">
                  <p><span style={{ color: '#FFFFFF7A' }}>2025 © Hard Skill Exchange</span></p>
                </div>
              </div>
              <div className="down_container_terms">
                <div className="menu-bottom">
                  <div className="menu-footer-menu-legal-container">
                    <ul className="custom_menu_shortcode">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://hardskill.exchange/terms-of-use/" className="main_menu_item_wrapper">
                        <div><span className="main_menu_item">Terms of use</span><svg className="menu_item_arrow" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 14 14" fill="none">
                          <g>
                            <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFF" />
                          </g>
                        </svg></div>
                      </a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy"><a href="https://hardskill.exchange/privacy-policy/" className="main_menu_item_wrapper">
                        <div><span className="main_menu_item">Privacy Policy</span><svg className="menu_item_arrow" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 14 14" fill="none">
                          <g>
                            <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFF" />
                          </g>
                        </svg></div>
                      </a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://hardskill.exchange/coppa-policy/" className="main_menu_item_wrapper">
                        <div><span className="main_menu_item">COPPA policy</span><svg className="menu_item_arrow" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 14 14" fill="none">
                          <g>
                            <path d="M3.03841 7.58334H9.55425L6.70758 10.43C6.48008 10.6575 6.48008 11.0308 6.70758 11.2583C6.93508 11.4858 7.30258 11.4858 7.53008 11.2583L11.3742 7.41417C11.6017 7.18667 11.6017 6.81917 11.3742 6.59167L7.53591 2.74167C7.30841 2.51417 6.94091 2.51417 6.71341 2.74167C6.48591 2.96917 6.48591 3.33667 6.71341 3.56417L9.55425 6.41667H3.03841C2.71758 6.41667 2.45508 6.67917 2.45508 7C2.45508 7.32084 2.71758 7.58334 3.03841 7.58334Z" fill="#FFF" />
                          </g>
                        </svg></div>
                      </a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <link rel="stylesheet" id="skills-search-style-css" href="https://hardskill.exchange/wp-content/themes/hse-web/assets/css/partials/skills-search.css?ver=0.1721" type="text/css" media="all" />
        <link rel="stylesheet" id="event-register-style-css" href="https://hardskill.exchange/wp-content/themes/hse-web/assets/css/partials/events-register.css?ver=0.1721" type="text/css" media="all" />

        <div id="anchor_block_for_rewatch_wideo" style={{ display: 'none' }} />
        <div id="global-skill-tooltip" className="custom-tooltip" />
      </div>

    </div>

  );
}