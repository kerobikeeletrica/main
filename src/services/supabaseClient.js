import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

let supabaseInstance = null

const isPlaceholder = (val) => !val || val.includes('seu-projeto') || val.includes('your-project') || val.includes('sua-chave') || val.includes('your-anon-key')

if (isPlaceholder(supabaseUrl) || isPlaceholder(supabaseKey)) {
  console.warn('Missing or placeholder Supabase environment variables. App will run in mock mode.')
  // Export a dummy object that mimics the supabase structure to avoid crashes
  supabaseInstance = {
    from: () => ({
      select: () => ({
        order: () => Promise.resolve({ data: [], error: new Error('Supabase not configured') }),
        eq: () => ({
          single: () => Promise.resolve({ data: null, error: new Error('Supabase not configured') }),
          order: () => Promise.resolve({ data: [], error: new Error('Supabase not configured') })
        }),
        limit: () => Promise.resolve({ data: [], error: new Error('Supabase not configured') })
      }),
      insert: () => Promise.resolve({ data: null, error: new Error('Supabase not configured') }),
      update: () => Promise.resolve({ data: null, error: new Error('Supabase not configured') })
    })
  }
} else {
  try {
    supabaseInstance = createClient(supabaseUrl, supabaseKey)
  } catch (err) {
    console.error('Failed to create Supabase client:', err)
  }
}

export const supabase = supabaseInstance
