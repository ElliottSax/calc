// Email automation workflows for dividend calculator
// Integrates with email service providers like SendGrid, Mailchimp, etc.

export interface EmailContact {
  email: string
  firstName?: string
  lastName?: string
  tags?: string[]
  customFields?: Record<string, any>
  subscribedAt: Date
  source: string
}

export interface EmailTemplate {
  id: string
  name: string
  subject: string
  preheader?: string
  content: string
  variables?: string[]
}

export interface EmailWorkflow {
  id: string
  name: string
  trigger: WorkflowTrigger
  steps: WorkflowStep[]
  active: boolean
}

export type WorkflowTrigger =
  | { type: 'signup'; source?: string }
  | { type: 'calculator_use'; calculatorType?: string }
  | { type: 'tag_added'; tag: string }
  | { type: 'custom_event'; event: string }
  | { type: 'date_based'; field: string; offset: number }

export interface WorkflowStep {
  id: string
  type: 'email' | 'wait' | 'condition' | 'tag' | 'webhook'
  config: StepConfig
}

export type StepConfig =
  | EmailStepConfig
  | WaitStepConfig
  | ConditionStepConfig
  | TagStepConfig
  | WebhookStepConfig

export interface EmailStepConfig {
  templateId: string
  fromName: string
  fromEmail: string
  replyTo?: string
}

export interface WaitStepConfig {
  duration: number
  unit: 'hours' | 'days' | 'weeks'
}

export interface ConditionStepConfig {
  field: string
  operator: 'equals' | 'contains' | 'greater_than' | 'less_than'
  value: any
  truePath: WorkflowStep[]
  falsePath?: WorkflowStep[]
}

export interface TagStepConfig {
  action: 'add' | 'remove'
  tags: string[]
}

export interface WebhookStepConfig {
  url: string
  method: 'POST' | 'GET'
  headers?: Record<string, string>
  body?: any
}

// Pre-built workflow templates
export const WORKFLOW_TEMPLATES = {
  welcomeSeries: {
    id: 'welcome-series',
    name: 'Welcome Email Series',
    trigger: { type: 'signup' as const },
    steps: [
      {
        id: 'welcome-1',
        type: 'email' as const,
        config: {
          templateId: 'welcome-email',
          fromName: 'Dividend Calculator Pro',
          fromEmail: 'hello@dividendcalculator.pro',
        } as EmailStepConfig,
      },
      {
        id: 'wait-1',
        type: 'wait' as const,
        config: {
          duration: 2,
          unit: 'days',
        } as WaitStepConfig,
      },
      {
        id: 'education-1',
        type: 'email' as const,
        config: {
          templateId: 'drip-guide',
          fromName: 'Dividend Calculator Pro',
          fromEmail: 'hello@dividendcalculator.pro',
        } as EmailStepConfig,
      },
      {
        id: 'wait-2',
        type: 'wait' as const,
        config: {
          duration: 3,
          unit: 'days',
        } as WaitStepConfig,
      },
      {
        id: 'broker-recommendation',
        type: 'email' as const,
        config: {
          templateId: 'broker-comparison',
          fromName: 'Dividend Calculator Pro',
          fromEmail: 'hello@dividendcalculator.pro',
        } as EmailStepConfig,
      },
    ],
    active: true,
  },

  calculatorAbandonment: {
    id: 'calculator-abandonment',
    name: 'Calculator Abandonment Recovery',
    trigger: { type: 'custom_event' as const, event: 'calculator_started_not_completed' },
    steps: [
      {
        id: 'wait-abandonment',
        type: 'wait' as const,
        config: {
          duration: 1,
          unit: 'hours',
        } as WaitStepConfig,
      },
      {
        id: 'recovery-email',
        type: 'email' as const,
        config: {
          templateId: 'complete-calculation',
          fromName: 'Dividend Calculator Pro',
          fromEmail: 'hello@dividendcalculator.pro',
        } as EmailStepConfig,
      },
      {
        id: 'wait-follow-up',
        type: 'wait' as const,
        config: {
          duration: 2,
          unit: 'days',
        } as WaitStepConfig,
      },
      {
        id: 'check-completion',
        type: 'condition' as const,
        config: {
          field: 'completed_calculation',
          operator: 'equals',
          value: false,
          truePath: [
            {
              id: 'help-email',
              type: 'email' as const,
              config: {
                templateId: 'calculation-help',
                fromName: 'Dividend Calculator Pro',
                fromEmail: 'hello@dividendcalculator.pro',
              } as EmailStepConfig,
            },
          ],
        } as ConditionStepConfig,
      },
    ],
    active: true,
  },

  weeklyDividendTips: {
    id: 'weekly-tips',
    name: 'Weekly Dividend Tips',
    trigger: { type: 'tag_added' as const, tag: 'weekly_tips' },
    steps: [
      {
        id: 'tip-1',
        type: 'email' as const,
        config: {
          templateId: 'weekly-tip-1',
          fromName: 'Dividend Calculator Pro',
          fromEmail: 'tips@dividendcalculator.pro',
        } as EmailStepConfig,
      },
      {
        id: 'wait-week-1',
        type: 'wait' as const,
        config: {
          duration: 1,
          unit: 'weeks',
        } as WaitStepConfig,
      },
      {
        id: 'tip-2',
        type: 'email' as const,
        config: {
          templateId: 'weekly-tip-2',
          fromName: 'Dividend Calculator Pro',
          fromEmail: 'tips@dividendcalculator.pro',
        } as EmailStepConfig,
      },
    ],
    active: true,
  },
}

// Email template examples
export const EMAIL_TEMPLATES: EmailTemplate[] = [
  {
    id: 'welcome-email',
    name: 'Welcome Email',
    subject: 'Welcome to Dividend Calculator Pro! 🎉',
    preheader: 'Start building your dividend portfolio today',
    content: `
      <h1>Welcome {{firstName}}!</h1>
      <p>Thank you for joining Dividend Calculator Pro. You're now part of a community of 50,000+ investors building wealth through dividend investing.</p>

      <h2>Here's what you can do:</h2>
      <ul>
        <li>📊 Calculate DRIP returns with our advanced calculator</li>
        <li>🔍 Compare dividend stocks side-by-side</li>
        <li>📈 Track your portfolio performance</li>
        <li>💡 Get personalized investment insights</li>
      </ul>

      <a href="{{calculatorUrl}}" style="display:inline-block;padding:12px 24px;background:#3b82f6;color:white;text-decoration:none;border-radius:8px;">
        Start Calculating Returns
      </a>

      <p>Need help? Reply to this email anytime!</p>
    `,
    variables: ['firstName', 'calculatorUrl'],
  },
  {
    id: 'drip-guide',
    name: 'DRIP Investment Guide',
    subject: 'Your Complete Guide to DRIP Investing 📚',
    preheader: 'Everything you need to know about dividend reinvestment',
    content: `
      <h1>The Power of Dividend Reinvestment</h1>
      <p>Hi {{firstName}},</p>
      <p>Did you know that reinvested dividends account for over 40% of S&P 500 returns since 1930?</p>

      <h2>What You'll Learn:</h2>
      <ul>
        <li>How DRIP investing accelerates wealth building</li>
        <li>Top dividend aristocrats for 2025</li>
        <li>Tax strategies for dividend investors</li>
        <li>Common mistakes to avoid</li>
      </ul>

      <a href="{{guideUrl}}" style="display:inline-block;padding:12px 24px;background:#10b981;color:white;text-decoration:none;border-radius:8px;">
        Download Free Guide
      </a>
    `,
    variables: ['firstName', 'guideUrl'],
  },
  {
    id: 'broker-comparison',
    name: 'Broker Comparison',
    subject: 'Top 5 Brokers for Dividend Investing 🏆',
    preheader: 'Find the perfect broker for your investment style',
    content: `
      <h1>Choose the Right Broker</h1>
      <p>Hi {{firstName}},</p>
      <p>We've analyzed 50+ brokers to find the best ones for dividend investors like you.</p>

      <h2>Our Top Picks:</h2>
      <table>
        <tr>
          <td><strong>Charles Schwab</strong></td>
          <td>Best Overall</td>
          <td>$0 commissions</td>
        </tr>
        <tr>
          <td><strong>Vanguard</strong></td>
          <td>Best for Index Funds</td>
          <td>Low expense ratios</td>
        </tr>
        <tr>
          <td><strong>M1 Finance</strong></td>
          <td>Best for Automation</td>
          <td>Auto-rebalancing</td>
        </tr>
      </table>

      <a href="{{comparisonUrl}}" style="display:inline-block;padding:12px 24px;background:#8b5cf6;color:white;text-decoration:none;border-radius:8px;">
        See Full Comparison
      </a>
    `,
    variables: ['firstName', 'comparisonUrl'],
  },
]

// Email automation service
export class EmailAutomationService {
  private workflows: Map<string, EmailWorkflow> = new Map()
  private contacts: Map<string, EmailContact> = new Map()
  private apiKey: string
  private provider: 'sendgrid' | 'mailchimp' | 'convertkit'

  constructor(provider: 'sendgrid' | 'mailchimp' | 'convertkit', apiKey: string) {
    this.provider = provider
    this.apiKey = apiKey
    this.loadWorkflows()
  }

  private loadWorkflows() {
    // Load pre-built workflows
    Object.values(WORKFLOW_TEMPLATES).forEach(workflow => {
      this.workflows.set(workflow.id, workflow)
    })
  }

  async addContact(contact: EmailContact) {
    this.contacts.set(contact.email, contact)

    // Sync with email provider
    await this.syncContact(contact)

    // Trigger signup workflows
    this.triggerWorkflows({ type: 'signup', source: contact.source })
  }

  private async syncContact(contact: EmailContact) {
    // Provider-specific API calls
    switch (this.provider) {
      case 'sendgrid':
        await this.syncToSendGrid(contact)
        break
      case 'mailchimp':
        await this.syncToMailchimp(contact)
        break
      case 'convertkit':
        await this.syncToConvertKit(contact)
        break
    }
  }

  private async syncToSendGrid(contact: EmailContact) {
    // SendGrid API implementation
    const response = await fetch('https://api.sendgrid.com/v3/marketing/contacts', {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contacts: [{
          email: contact.email,
          first_name: contact.firstName,
          last_name: contact.lastName,
          custom_fields: contact.customFields,
        }],
      }),
    })

    return response.json()
  }

  private async syncToMailchimp(contact: EmailContact) {
    // Mailchimp API implementation
    // Similar to SendGrid but using Mailchimp's API structure
  }

  private async syncToConvertKit(contact: EmailContact) {
    // ConvertKit API implementation
    // Similar to SendGrid but using ConvertKit's API structure
  }

  private triggerWorkflows(trigger: WorkflowTrigger) {
    this.workflows.forEach(workflow => {
      if (workflow.active && this.matchesTrigger(workflow.trigger, trigger)) {
        this.executeWorkflow(workflow)
      }
    })
  }

  private matchesTrigger(workflowTrigger: WorkflowTrigger, eventTrigger: WorkflowTrigger): boolean {
    if (workflowTrigger.type !== eventTrigger.type) return false

    // Additional matching logic based on trigger type
    switch (workflowTrigger.type) {
      case 'signup':
        return !workflowTrigger.source || workflowTrigger.source === (eventTrigger as any).source
      case 'calculator_use':
        return !workflowTrigger.calculatorType || workflowTrigger.calculatorType === (eventTrigger as any).calculatorType
      case 'tag_added':
        return workflowTrigger.tag === (eventTrigger as any).tag
      case 'custom_event':
        return workflowTrigger.event === (eventTrigger as any).event
      default:
        return true
    }
  }

  private async executeWorkflow(workflow: EmailWorkflow) {
    for (const step of workflow.steps) {
      await this.executeStep(step)
    }
  }

  private async executeStep(step: WorkflowStep) {
    switch (step.type) {
      case 'email':
        await this.sendEmail(step.config as EmailStepConfig)
        break
      case 'wait':
        await this.wait(step.config as WaitStepConfig)
        break
      case 'condition':
        await this.evaluateCondition(step.config as ConditionStepConfig)
        break
      case 'tag':
        await this.manageTags(step.config as TagStepConfig)
        break
      case 'webhook':
        await this.callWebhook(step.config as WebhookStepConfig)
        break
    }
  }

  private async sendEmail(config: EmailStepConfig) {
    // Send email using provider API
    console.log('Sending email:', config)
  }

  private async wait(config: WaitStepConfig) {
    // Schedule next step execution
    const ms = config.duration * (
      config.unit === 'hours' ? 3600000 :
      config.unit === 'days' ? 86400000 :
      604800000 // weeks
    )

    return new Promise(resolve => setTimeout(resolve, ms))
  }

  private async evaluateCondition(config: ConditionStepConfig) {
    // Evaluate condition and execute appropriate path
    console.log('Evaluating condition:', config)
  }

  private async manageTags(config: TagStepConfig) {
    // Add or remove tags
    console.log('Managing tags:', config)
  }

  private async callWebhook(config: WebhookStepConfig) {
    // Call external webhook
    await fetch(config.url, {
      method: config.method,
      headers: config.headers,
      body: JSON.stringify(config.body),
    })
  }
}

// Export singleton instance
export const emailAutomation = typeof window !== 'undefined'
  ? new EmailAutomationService(
      'sendgrid',
      process.env.NEXT_PUBLIC_SENDGRID_API_KEY || ''
    )
  : null