export function getSupabaseUrl(): string {
    const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || null;
    if (!url) {
        throw new Error('Missing Supabase URL configuration (SUPABASE_URL)');
    }
    return url;
}

/**
 * Returns the current Supabase publishable key.
 *
 * The legacy anon-key variables remain as a migration fallback so existing
 * deployments continue working while their API keys are rotated.
 */
export function getSupabasePublishableKey(): string {
    const publishableKey = process.env.SUPABASE_PUBLISHABLE_KEY
        || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
        || process.env.SUPABASE_ANON_KEY
        || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
        || null;
    if (!publishableKey) {
        throw new Error('Missing Supabase publishable key configuration (SUPABASE_PUBLISHABLE_KEY)');
    }
    return publishableKey;
}

/** @deprecated Use getSupabasePublishableKey instead. */
export const getSupabaseAnonKey = getSupabasePublishableKey;

export function getSupabaseAuthAdminKey(): string | null {
    return process.env.SUPABASE_SECRET_KEY || null;
}
