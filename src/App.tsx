import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveViewer } from './components/InteractiveViewer';
import { CostCalculator } from './components/CostCalculator';
import { PlansGallery } from './components/PlansGallery';
import { WorkflowSteps } from './components/WorkflowSteps';
import { PricingPackages } from './components/PricingPackages';
import { VastuGuide } from './components/VastuGuide';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { AssociatePartner } from './components/AssociatePartner';
import { RequirementModal } from './components/RequirementModal';
import { SampleDrawingModal } from './components/SampleDrawingModal';
import { PlanDetailModal } from './components/PlanDetailModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { FloorPlanItem } from './types';

export default function App() {
  const [isRequirementModalOpen, setIsRequirementModalOpen] = useState(false);
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);
  const [selectedPlanForDetail, setSelectedPlanForDetail] = useState<FloorPlanItem | null>(null);
  const [initialPlanForRequirement, setInitialPlanForRequirement] = useState<string | undefined>(undefined);

  const handleOpenRequirement = (planTitle?: string) => {
    setInitialPlanForRequirement(planTitle);
    setIsRequirementModalOpen(true);
  };

  const handleOpenSampleDrawing = () => {
    setIsSampleModalOpen(true);
  };

  const handleSelectPackage = (packageName: string) => {
    handleOpenRequirement(`Package: ${packageName}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Top 3-Zone Navigation Bar */}
      <Navbar onOpenRequirementModal={() => handleOpenRequirement()} />

      <main className="flex-1">
        {/* Hero Section matching the image visual & core ₹499 value prop */}
        <Hero
          onOpenRequirementModal={() => handleOpenRequirement()}
          onOpenSampleModal={handleOpenSampleDrawing}
        />

        {/* Interactive 3D & 2D Floor Plan Explorer */}
        <InteractiveViewer
          onSelectPlanForRequirement={(planTitle) => handleOpenRequirement(planTitle)}
        />

        {/* Cost & Construction Budget Estimator */}
        <CostCalculator
          onOpenRequirementModal={() => handleOpenRequirement()}
        />

        {/* Standard Indian Plot Plans Catalog */}
        <PlansGallery
          onSelectPlan={(plan) => setSelectedPlanForDetail(plan)}
          onOpenRequirementForPlan={(planTitle) => handleOpenRequirement(planTitle)}
        />

        {/* 4-Step Simple | Smart | Affordable Process */}
        <WorkflowSteps
          onOpenRequirementModal={() => handleOpenRequirement()}
        />

        {/* Transparent ₹499 Pricing Packages */}
        <PricingPackages
          onSelectPackage={handleSelectPackage}
        />

        {/* 100% Vastu Shastra Guidelines & Orientation Section */}
        <VastuGuide />

        {/* Associate Partner Program - Open for Any Area */}
        <AssociatePartner />

        {/* Verified Social Proof & Customer Reviews */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer onOpenRequirementModal={() => handleOpenRequirement()} />

      {/* Modals & Overlays */}
      <RequirementModal
        isOpen={isRequirementModalOpen}
        onClose={() => setIsRequirementModalOpen(false)}
        initialPlan={initialPlanForRequirement}
      />

      <SampleDrawingModal
        isOpen={isSampleModalOpen}
        onClose={() => setIsSampleModalOpen(false)}
        onProceedToOrder={() => handleOpenRequirement('Official Sample Blueprint Style')}
      />

      <PlanDetailModal
        plan={selectedPlanForDetail}
        onClose={() => setSelectedPlanForDetail(null)}
        onOrderPlan={(planTitle) => handleOpenRequirement(planTitle)}
      />

      {/* Floating Compact WhatsApp Action Button */}
      <FloatingWhatsApp onClick={() => handleOpenRequirement()} />
    </div>
  );
}
